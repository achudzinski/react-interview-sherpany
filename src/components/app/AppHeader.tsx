import * as React from "react";

import "./AppHeader.scss";
import {AppMenu} from "./AppMenu";

export const AppHeader = () => (
    <div className={"app-header"}>
        <AppMenu/>
    </div>
);