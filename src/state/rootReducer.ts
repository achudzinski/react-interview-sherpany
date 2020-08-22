import {combineReducers} from "redux";
import {usersReducer} from "./users";
import {seedReducer} from "./seed";

export const rootReducer = combineReducers({
    seed: seedReducer,
    users: usersReducer,
})
