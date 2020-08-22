import * as React from "react";
import "./UserListItem.scss";
import {GridList} from "../../generic/GridList";
import InfiniteScroll from 'react-infinite-scroller';
import {Spinner} from "../../global/Spinner";
import {UserType} from "../../../models/UserType";
import {UserListItem} from "./UserListItem";
import "./UserList.scss";

export interface UserListProps {
    users: UserType[],
    loadingError: boolean,
    endOfList: boolean,
    onLoadMore: (page: number) => void,
    onUserSelected: (user:UserType) => void,
}

export const UserList = ({users, onLoadMore, onUserSelected, loadingError, endOfList}:UserListProps) => {
    return (
        <div className={"user-list"}>
            <InfiniteScroll
                pageStart={0}
                loadMore={onLoadMore}
                hasMore={!endOfList && !loadingError}
                loader={<Spinner key={"spinner"} />}
            >
                <GridList items={users.map(
                    (user, index) => <UserListItem  user={user} key={index} onClick={() => onUserSelected(user)} />
                )} />
            </InfiniteScroll>
            {endOfList && <div className={"user-list--end"}>end of users catalog</div> }
            {loadingError && <div className={"user-list--error"}>loading error</div>}
        </div>
    );
};
