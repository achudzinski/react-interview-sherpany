import * as React from "react";
import {ModalWindow} from "../../global/ModalWindow";
import {UserType} from "../../../models/UserType";
import "./UserModalWindow.scss";

export interface UserModalWindowProps {
    user: UserType,
    onCloseClick: () => void,
}

export const UserModalWindow = ({user, onCloseClick}:UserModalWindowProps) => (
    <ModalWindow className={"user-modal-window"} onCloseClick={onCloseClick}>
        <>
            <h1>{user.firstName} {user.lastName}</h1>

            <div className={"user-modal-window--label"}>
                Location:
            </div>
            <div className={"user-modal-window--value"}>
                {user.location.streetName} {user.location.streetNumber}<br />
                {user.location.city}<br />
                {user.location.state}<br />
                {user.location.postcode}
            </div>

            <div className={"user-modal-window--label"}>
                Phone:
            </div>
            <div className={"user-modal-window--value"}>
                {user.phone}<br />
            </div>

            <div className={"user-modal-window--label"}>
                Cellphone:
            </div>
            <div className={"user-modal-window--value"}>
                {user.cell}<br />
            </div>
        </>
    </ModalWindow>
);