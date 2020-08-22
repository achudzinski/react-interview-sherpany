import * as React from "react";

import {classNames} from "../../../services/classNames";
import "./Switch.scss";

export interface SwitchProps {
    isOn: boolean,
    onChange: () => void,
}

export const Switch = ({isOn, onChange}:SwitchProps) => {
    return (
        <div className={classNames(["switch", isOn ? "switch--on" : "switch--off"])} onClick={onChange} >
            <div className={"switch--circle"}></div>
        </div>
    );
};