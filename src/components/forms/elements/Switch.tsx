import * as React from "react";

import {classNames} from "../../../services/classNames";
import "./Switch.scss";

export interface SwitchProps {
    isOn: boolean,
    onChange: () => void,
}

/**
 * Switch with two states - on/off and animation when state is changed.
 */
export const Switch = ({isOn, onChange}:SwitchProps) => {
    return (
        <div className={classNames(["switch", isOn ? "switch--on" : "switch--off"])} onClick={onChange} >
            <div className={"switch--circle"}></div>
        </div>
    );
};