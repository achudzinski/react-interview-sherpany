import * as React from 'react';

import {Route, Switch} from "react-router-dom";
import {routeToUserList} from "../../services/urlManager";
import {UserListPage} from "../pages/UserListPage";
import {AppHeader} from "./AppHeader";
import "./App.scss";

export const App = () => {
    return (
        <div className="app">
            <AppHeader />
            <Switch>
                <Route exact={true} path={routeToUserList}>
                    <UserListPage/>
                </Route>
            </Switch>
        </div>
    );
};
