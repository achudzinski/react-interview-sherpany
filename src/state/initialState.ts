import {StateType} from "./StateType";

export const getInitialState = ():StateType => {
    return {
        seed: null,
        users: [],
        selectedUser: null,
    };
}

