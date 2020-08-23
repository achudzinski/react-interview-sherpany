import * as React from "react";

import "./ModalWindow.scss";
import {ReactNode} from "react";
import {classNames} from "../../services/classNames";
import {CloseIcon} from "../icons/CloseIcon";

export interface ModalWindowProps {
    children: ReactNode,
    className?: string,
    onCloseClick: () => void,
}

/**
 * Generic modal window displayed over other content with black, transparent overlay
 */
export const ModalWindow = ({children, className, onCloseClick}:ModalWindowProps) => (
    <div className={classNames(["modal-window", className])} onClick={onCloseClick}>
        <div className={"modal-window--content"} onClick={(e) => e.stopPropagation()}>
            <div className={"modal-window--close"} onClick={onCloseClick}>
                <CloseIcon />
            </div>
            {children}
        </div>
    </div>
);