import {combineReducers} from "redux";
import {usersReducer} from "./users";
import {seedReducer} from "./seed";
import {selectedUserReducer} from "./selectedUser";
import {selectedNationalitiesReducer} from "./selectedNationalities";
import {searchTermReducer} from "./searchTerm";

export const rootReducer = combineReducers({
    seed: seedReducer,
    users: usersReducer,
    selectedUser: selectedUserReducer,
    selectedNationalities: selectedNationalitiesReducer,
    searchTerm: searchTermReducer,
})
