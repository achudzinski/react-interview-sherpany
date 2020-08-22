import {getInitialState} from "./initialState";
import {clearSeed, seedReducer, setSeed} from "./seed";

describe("seed state", () => {
    describe("action creators", () => {
        it("creates setSeed action", () => {
            const action = setSeed("abc");
            expect(action.type).toBe("SET_SEED");
            expect(action.payload).toBe("abc");
        });

        it("creates clearSeed action", () => {
            const action = clearSeed();
            expect(action.type).toBe("CLEAR_SEED");
        });
    });

    describe("seed reducer", () => {
        it('sets seed', () => {
            expect(seedReducer("X", setSeed("Y"))).toBe("Y");
        });

        it('clear seed', () => {
            expect(seedReducer("X", clearSeed())).toBe("");
        })
    });
});

