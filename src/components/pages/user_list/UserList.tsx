import * as React from "react";
import "./UserListItem.scss";
import {GridList} from "../../generic/GridList";
import InfiniteScroll from 'react-infinite-scroller';
import {Spinner} from "../../global/Spinner";
import {UserType} from "../../../models/UserType";
import {UserListItem} from "./UserListItem";
import "./UserList.scss";
import {UserListErrorAlert} from "./UserListErrorAlert";

export interface UserListProps {
    users: UserType[],
    loadingError: boolean,
    endOfList: boolean,
    loadMoreDisabled: boolean,
    onLoadMore: (page: number) => void,
    onUserSelected: (user:UserType) => void,
}

export const UserList = ({users, onLoadMore, loadMoreDisabled, onUserSelected, loadingError, endOfList}:UserListProps) => {
    return (
        <div className={"user-list"}>
            <InfiniteScroll
                pageStart={0}
                loadMore={onLoadMore}
                hasMore={!endOfList && !loadingError && !loadMoreDisabled}
                loader={<Spinner key={"spinner"} />}
            >
                <GridList items={users.map(
                    (user, index) => <UserListItem  user={user} key={index} onClick={() => onUserSelected(user)} />
                )} />
            </InfiniteScroll>
            {endOfList && <UserListErrorAlert>end of users catalog</UserListErrorAlert> }
            {loadingError && <UserListErrorAlert>loading error</UserListErrorAlert>}
            {loadMoreDisabled && <UserListErrorAlert>Loading more result disabled. Remove search criteria to find more users.</UserListErrorAlert>}
        </div>
    );
};
