import {StateType} from "./StateType";
import {getPersistedNationalities} from "../services/localStorage";

export const getInitialState = ():StateType => {
    return {
        seed: null,
        users: [],
        selectedUser: null,
        selectedNationalities: getPersistedNationalities(),
        searchTerm: "",
    };
}

