import {combineReducers} from "redux";
import {usersReducer} from "./users";
import {seedReducer} from "./seed";
import {selectedUserReducer} from "./selectedUser";

export const rootReducer = combineReducers({
    seed: seedReducer,
    users: usersReducer,
    selectedUser: selectedUserReducer,
})
