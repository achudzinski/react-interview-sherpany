import * as React from "react";
import {UserListContainer} from "./user_list/UserListContainer";
import {config} from "../../config";

export const UserListPage = () => (
    <div>
        <UserListContainer
            numberOfItemsPerPage={config.userList.numberOfItemsPerPage}
            maxNumberOfItems={config.userList.maxNumberOfItems}
        />
    </div>
);