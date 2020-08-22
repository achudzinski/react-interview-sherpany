import * as React from "react";
import {Link} from "react-router-dom";
import {getUrlToSettingsPage, getUrlToUserList} from "../../services/urlManager";
import "./AppMenu.scss";

export const AppMenu = () => (
    <nav className={"app-menu"}>
        <Link to={getUrlToUserList()}>User list</Link>
        <Link to={getUrlToSettingsPage()}>Settings</Link>
    </nav>
);