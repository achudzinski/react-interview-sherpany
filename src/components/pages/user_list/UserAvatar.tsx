import * as React from "react";

export interface UserAvatarProps {
    path: string,
};

export const UserAvatar = ({path}: UserAvatarProps) => (
    <div className={"user-avatar"}>
        <img alt={"avatar"} src={path}/>
    </div>
);

