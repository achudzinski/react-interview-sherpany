import * as React from "react";
import "./UserListItem.scss";
import {GridList} from "../../generic/GridList";
import {useDispatch, useSelector} from "react-redux";
import {StateType} from "../../../state/StateType";
import {useState} from "react";
import {randomUserApiClient} from "../../../services/random_user_api/RandomUserApiClient";
import {loadUsers} from "../../../state/users";
import InfiniteScroll from 'react-infinite-scroller';
import {Spinner} from "../../global/Spinner";
import {UserType} from "../../../models/UserType";

import "./UserList.scss";
import {UserListItem} from "./UserListItem";

import {setSeed} from "../../../state/seed";

export interface UserListContainerProps {
    numberOfItemsPerPage: number,
    maxNumberOfItems: number
}

export const UserListContainer = ({numberOfItemsPerPage, maxNumberOfItems}:UserListContainerProps) => {
    const seed = useSelector((state:StateType) => state.seed);
    const users = useSelector((state:StateType) => state.users);
    const dispatch = useDispatch();

    const [usersPreloaded, setUsersPreloaded] = useState<UserType[]>([]);
    const [usersPreloadedPage, setUsersPreloadedPage] = useState(0);
    const [selectedUser, setSelectedUser] = useState<UserType|null>(null);
    const [loadingError, setLoadingError] = useState(false);

    const preloadUsers = async (page:number) => {
        try {
            const result = await randomUserApiClient
                .getUsers(numberOfItemsPerPage, page, [], seed);
            setUsersPreloaded(result.users);
            setUsersPreloadedPage(page);
        } catch(e) {
            console.error(e);
        }
    };

    const loadUsersHandler = async (page:number) => {
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
        } catch(e) {
            console.error(e);
            setLoadingError(true);
        }
    }

    const handleOnUserSelected = (user:UserType) => {
        setSelectedUser(user);
    };

    const handleOnModalCloseClick = () => {
        setSelectedUser(null);
    };

    return (
        <div className={"user-list"}>
            <InfiniteScroll
                pageStart={0}
                loadMore={loadUsersHandler}
                hasMore={users.length < maxNumberOfItems && !loadingError}
                loader={<Spinner key={"spinner"} />}
            >
                <GridList items={users.map(
                    (user, index) => <UserListItem  user={user} key={index} onClick={() => handleOnUserSelected(user)} />
                )} />
            </InfiniteScroll>
            {users.length >= maxNumberOfItems && <div className={"user-list--end"}>end of users catalog</div> }
            {loadingError && <div className={"user-list--error"}>loading error</div>}
        </div>
    );
};
