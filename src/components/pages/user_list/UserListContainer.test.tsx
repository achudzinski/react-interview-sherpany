import * as React from 'react';
import renderer from 'react-test-renderer';
import {UserListContainer} from "./UserListContainer";
import {Provider} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";
import {rootReducer} from "../../../state/rootReducer";
import {user1, user2} from "../../../tests/mockedUsers";

const users = [
    user1,
    user2,
];

describe("<UserListContainer />", () => {
    it('renders correctly without selected user', () => {
        const store = configureStore({
            reducer: rootReducer,
            preloadedState: {
                users: users,
                selectedUser: null,
                seed: "abc",
            }
        });

        const tree = renderer
            .create(
                <Provider store={store}>
                    <UserListContainer
                       maxNumberOfItems={1000}
                       numberOfItemsPerPage={50}
                    />
                </Provider>
            ).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('renders correctly with selected user', () => {
        const store = configureStore({
            reducer: rootReducer,
            preloadedState: {
                users: users,
                selectedUser: user2,
                seed: "abc",
            }
        });

        const tree = renderer
            .create(
                <Provider store={store}>
                    <UserListContainer
                        maxNumberOfItems={1000}
                        numberOfItemsPerPage={50}
                    />
                </Provider>
            ).toJSON();

        expect(tree).toMatchSnapshot();
    });

});
