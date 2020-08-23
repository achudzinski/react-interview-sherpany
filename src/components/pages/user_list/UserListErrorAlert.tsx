import * as React from "react";
import "./UserListErrorAlert.scss";

export interface UserListErrorAlertProps {
    children: string,
};

export const UserListErrorAlert = ({children}: UserListErrorAlertProps) => (
    <div className={"user-list-error-alert"}>
        {children}
    </div>
);

