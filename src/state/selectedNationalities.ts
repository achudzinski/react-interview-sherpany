import {StateType} from "./StateType";

export const AVAILABLE_NATIONALITIES = {
    CH: "Swiss",
    ES: "Spanish",
    FR: "French",
    GB: "British",
};

export const SELECT_NATIONALITIES = 'SELECT_NATIONALITIES'

export interface SelectNationalitiesAction {
    type: typeof SELECT_NATIONALITIES
    payload: string[]
}

export function selectNationalities(nationalities: string[]): SelectNationalitiesAction {
    return {
        type: SELECT_NATIONALITIES,
        payload: nationalities
    }
}

export type SelectedNationalitiesActions = SelectNationalitiesAction;

export const selectedNationalitiesReducer = (state: string[] = [], action: SelectedNationalitiesActions) => {
    if (action.type === SELECT_NATIONALITIES) {
        return action.payload;
    }

    return state;
};

export const selectedNationalitiesSelector = (state:StateType) =>
    state.selectedNationalities.length > 0
        ? state.selectedNationalities
        : Object.keys(AVAILABLE_NATIONALITIES);