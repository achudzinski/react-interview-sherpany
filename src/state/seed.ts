export const SET_SEED = 'SET_SEED';
export const CLEAR_SEED = 'CLEAR_SEED';

export interface SetSeedAction {
    type: typeof SET_SEED,
    payload: string,
}

export interface ClearSeedAction {
    type: typeof CLEAR_SEED
}

export type SeedActions = SetSeedAction | ClearSeedAction;

export const setSeed = (seed: string): SetSeedAction => {
    return {
        type: SET_SEED,
        payload: seed
    }
}

export const clearSeed = (): ClearSeedAction => {
    return {
        type: CLEAR_SEED,
    }
}

export const seedReducer = (state: string | null = null, action: SeedActions) => {
    if (action.type === SET_SEED) {
        return action.payload;
    }

    if (action.type == CLEAR_SEED) {
        return "";
    }

    return state;
};