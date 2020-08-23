import {getInitialState} from "./initialState";
import {clearSeed, seedReducer, setSeed} from "./seed";
import {searchForUsers, searchTermReducer} from "./searchTerm";

describe("search term state", () => {
    describe("action creators", () => {
        it("creates searchForUser action", () => {
            const action = searchForUsers("abc");
            expect(action.type).toBe("SEARCH_FOR_USERS");
            expect(action.payload).toBe("abc");
        });
    });

    describe("search term reducer", () => {
        it('sets search term', () => {
            expect(searchTermReducer("X", searchForUsers("Y"))).toBe("Y");
        });

        it('clear search term', () => {
            expect(searchTermReducer("X", searchForUsers(""))).toBe("");
        })
    });
});

