import {selectedUserReducer, selectUser} from "./selectedUser";
import {user1, user2} from "../tests/mockedUsers";

describe("selected user state", () => {
    describe("action creators", () => {
        it("creates selectUser action", () => {
            const action = selectUser(user1);
            expect(action.type).toBe("SELECT_USER");
            expect(action.payload).toBe(user1);
        });
    });

    describe("selected user reducer", () => {
        it('selects user', () => {
            expect(selectedUserReducer(null, selectUser(user2))).toBe(user2);
        });

        it('clears user', () => {
            expect(selectedUserReducer(user1, selectUser(null))).toBe(null);
        })
    });
});

