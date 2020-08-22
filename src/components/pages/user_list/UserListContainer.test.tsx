import * as React from 'react';
import renderer from 'react-test-renderer';
import {UserListContainer} from "./UserListContainer";
import {Provider} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";
import {rootReducer} from "../../../state/rootReducer";

const user1 = {
    id: "123",
    email: 'test@test.com',
    username: 'test',
    firstName: 'te',
    lastName: 'st',
    cell: "+44 000 000 000",
    phone: "+44 111 111 111",
    pictureThumbnail: "a.jpg",
    location: {
        city: "Manchestr",
        postcode: "M1M2",
        state: "abc",
        streetName: "def",
        streetNumber: 123
    }
};

const user2 = {
    id: "456",
    email: 'test2@test.com',
    username: 'test2',
    firstName: 'te2',
    lastName: 'st2',
    cell: "+44 000 000 001",
    phone: "+44 111 111 112",
    pictureThumbnail: "b.jpg",
    location: {
        city: "Manchestr",
        postcode: "M1M2",
        state: "abc",
        streetName: "def",
        streetNumber: 123
    }
};

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
