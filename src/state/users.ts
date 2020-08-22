import {UserType} from "../models/UserType";

export const LOAD_USERS = 'LOAD_USERS';
export const CLEAR_USERS = 'CLEAR_USERS';

export interface LoadUsersAction {
    type: typeof LOAD_USERS,
    payload: UserType[]
}

export interface ClearUsersAction {
    type: typeof CLEAR_USERS
}

export type UsersActions = LoadUsersAction | ClearUsersAction;

export const loadUsers = (users: UserType[]): LoadUsersAction => {
    return {
        type: LOAD_USERS,
        payload: users
    }
}

export const clearUsers = (): ClearUsersAction => {
    return {
        type: CLEAR_USERS,
    }
}

export const usersReducer = (state: UserType[] = [], action: UsersActions) => {
    if (action.type === LOAD_USERS) {
        return state.concat(action.payload);
    }

    if (action.type == CLEAR_USERS) {
        return [];
    }

    return state;
};