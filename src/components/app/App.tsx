import * as React from 'react';

import {Route, Switch} from "react-router-dom";
import {routeToSettingsPage, routeToUserList} from "../../services/urlManager";
import {UserListPage} from "../pages/UserListPage";
import {AppHeader} from "./AppHeader";
import "./App.scss";
import {SettingsPage} from "../pages/SettingsPage";

export const App = () => {
    return (
        <div className="app">
            <AppHeader />
            <Switch>
                <Route exact={true} path={routeToSettingsPage}>
                    <SettingsPage/>
                </Route>
                <Route exact={true} path={routeToUserList}>
                    <UserListPage/>
                </Route>
            </Switch>
        </div>
    );
};
