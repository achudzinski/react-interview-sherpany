import {clearUsers, loadUsers, usersReducer} from "./users";
import {user1, user2} from "../tests/mockedUsers";

describe("users state", () => {
    describe("action creators", () => {
        it("creates loadUsers action", () => {
            const action = loadUsers([user1, user2]);
            expect(action.type).toBe("LOAD_USERS");
            expect(action.payload).toStrictEqual([user1, user2]);
        });

        it("creates clearUsers action", () => {
            const action = clearUsers();
            expect(action.type).toBe("CLEAR_USERS");
        });
    });

    describe("users reducer", () => {
        it('loads users', () => {
            expect(usersReducer([user1], loadUsers([user2]))).toStrictEqual([user1, user2]);
        });

        it('clears users', () => {
            expect(usersReducer([user1, user2], clearUsers())).toStrictEqual([]);
        })
    });
});

