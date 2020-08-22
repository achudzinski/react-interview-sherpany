import * as React from "react";
import {ReactNode} from "react";
import "./GridList.scss";

export interface GridListProps {
    items: ReactNode[],
};

export const GridList = ({items}:GridListProps) => (
    <div className={"grid-list"}>
        {items}
    </div>
);