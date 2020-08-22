import * as React from "react";
import {UserType} from "../../../models/UserType";
import {UserAvatar} from "./UserAvatar";
import "./UserListItem.scss";

export interface UserListItemProps {
    user: UserType,
    onClick?: () => void,
};

export const UserListItem = ({user, onClick}: UserListItemProps) => (
    <div className={"user-list-item"} onClick={onClick}>
        <UserAvatar path={user.pictureThumbnail}/>
        <div>{user.firstName} {user.lastName}</div>
        <div>{user.username}</div>
        <div>{user.email}</div>
    </div>
);