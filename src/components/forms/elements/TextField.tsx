import * as React from "react";
import "./TextField.scss";

export interface TextFieldProps {
    value?: string | number,
    onChange: (value: string) => void,
}

export const TextField = ({value, onChange}: TextFieldProps) => (
    <div className={"text-field"}>
        <input
            type="text"
            className={"text-field--input"}
            value={value}
            onChange={e => onChange(e.target.value)}
        />
    </div>
);