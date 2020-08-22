import {getInitialState} from "./initialState";
import {clearSeed, seedReducer, setSeed} from "./seed";
import {loadUsers} from "./users";
import {selectedNationalitiesReducer, selectNationalities} from "./selectedNationalities";

describe("selected nationalities state", () => {
    describe("action creators", () => {
        it("creates selectNationalities action", () => {
            const action = selectNationalities(["CH", "GB"]);
            expect(action.type).toBe("SELECT_NATIONALITIES");
            expect(action.payload).toStrictEqual(["CH", "GB"]);
        });
    });

    describe("selected nationalities reducer", () => {
        it('sets nationalities', () => {
            expect(selectedNationalitiesReducer(["FR"], selectNationalities(["CH", "GB"]))).toStrictEqual(["CH", "GB"]);
        });

        it('clears nationalities', () => {
            expect(selectedNationalitiesReducer(["FR"], selectNationalities([]))).toStrictEqual([]);
        })
    });
});

