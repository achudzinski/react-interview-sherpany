export const SEARCH_FOR_USERS = 'SEARCH_FOR_USERS';

export interface SearchForUsersAction {
    type: typeof SEARCH_FOR_USERS,
    payload: string,
}

export type SearchTermActions = SearchForUsersAction;

export const searchForUsers = (searchTerm: string): SearchForUsersAction => {
    return {
        type: SEARCH_FOR_USERS,
        payload: searchTerm
    }
};

export const searchTermReducer = (state: string = "", action: SearchTermActions) => {
    if (action.type === SEARCH_FOR_USERS) {
        return action.payload;
    }

    return state;
};