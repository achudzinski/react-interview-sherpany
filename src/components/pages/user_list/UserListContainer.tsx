import * as React from "react";
import "./UserListItem.scss";
import {useDispatch, useSelector} from "react-redux";
import {StateType} from "../../../state/StateType";
import {useState} from "react";
import {randomUserApiClient} from "../../../services/random_user_api/RandomUserApiClient";
import {loadUsers} from "../../../state/users";
import {UserType} from "../../../models/UserType";
import {UserModalWindow} from "./UserModalWindow";
import {setSeed} from "../../../state/seed";
import {selectUser} from "../../../state/selectedUser";
import {UserList} from "./UserList";

export interface UserListContainerProps {
    numberOfItemsPerPage: number,
    maxNumberOfItems: number
}

export const UserListContainer = ({numberOfItemsPerPage, maxNumberOfItems}: UserListContainerProps) => {
    const seed = useSelector((state: StateType) => state.seed);
    const users = useSelector((state: StateType) => state.users);
    const selectedUser = useSelector((state: StateType) => state.selectedUser);
    const dispatch = useDispatch();

    const [usersPreloaded, setUsersPreloaded] = useState<UserType[]>([]);
    const [usersPreloadedPage, setUsersPreloadedPage] = useState(0);
    const [loadingError, setLoadingError] = useState(false);

    const preloadUsers = async (page: number) => {
        try {
            const result = await randomUserApiClient
                .getUsers(numberOfItemsPerPage, page, [], seed);
            setUsersPreloaded(result.users);
            setUsersPreloadedPage(page);
        } catch (e) {
            console.error(e);
        }
    };

    const handleOnLoadMore = async (page: number) => {
        if (usersPreloaded.length > 0 && page === usersPreloadedPage) {
            dispatch(loadUsers(usersPreloaded));
            setUsersPreloaded([]);
            setUsersPreloadedPage(0);

            await preloadUsers(page + 1);

            return;
        }

        try {
            const result = await randomUserApiClient
                .getUsers(numberOfItemsPerPage, page, [], seed);

            dispatch(loadUsers(result.users));

            if (page == 1) {
                dispatch(setSeed(result.seed));
            }

            await preloadUsers(page + 1);
        } catch (e) {
            console.error(e);
            setLoadingError(true);
        }
    }

    const handleOnUserSelected = (user: UserType) => {
        dispatch(selectUser(user));
    };

    const handleOnModalCloseClick = () => {
        dispatch(selectUser(null));
    };

    return (
        <>
            <UserList
                users={users}
                loadingError={loadingError}
                endOfList={users.length >= maxNumberOfItems}
                onLoadMore={handleOnLoadMore}
                onUserSelected={handleOnUserSelected}
            />
            {selectedUser && <UserModalWindow user={selectedUser} onCloseClick={handleOnModalCloseClick}/>}
        </>
    );
};
