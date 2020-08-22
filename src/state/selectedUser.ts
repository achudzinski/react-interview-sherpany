import {UserType} from "../models/UserType";

export const SELECT_USER = 'SELECT_USER';

export interface SelectUserAction {
    type: typeof SELECT_USER,
    payload: UserType|null
}

export type SelectedUserActions = SelectUserAction;

export const selectUser = (user: UserType|null): SelectUserAction => {
    return {
        type: SELECT_USER,
        payload: user
    }
}

export const selectedUserReducer = (state: UserType|null = null, action: SelectedUserActions) => {
    if (action.type === SELECT_USER) {
        return action.payload;
    }

    return state;
};