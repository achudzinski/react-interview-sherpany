import * as React from "react";
import {ReactNode} from "react";
import "./FieldLabel.scss";

export interface FieldLabelProps {
    children: ReactNode,
}

export const FieldLabel = ({children}: FieldLabelProps) => (
    <div className={"field-label"}>
        {children}
    </div>
);