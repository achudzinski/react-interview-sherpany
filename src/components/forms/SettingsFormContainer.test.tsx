import * as React from 'react';
import renderer from 'react-test-renderer';
import {mount, shallow} from "../../enzyme";
import {SettingsForm} from "./SettingsForm";
import {SettingsFormContainer} from "./SettingsFormContainer";
import {MemoryRouter} from "react-router";
import {Provider} from "react-redux";
import {CombinedState, configureStore, EnhancedStore} from "@reduxjs/toolkit";
import {rootReducer} from "../../state/rootReducer";
import {StateType} from "../../state/StateType";

const user = {
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

describe("<SettingsFormContainer />", () => {

    let store:EnhancedStore<CombinedState<StateType>>;
    beforeEach(() => {
        store = configureStore({
            reducer: rootReducer,
            preloadedState: {
                seed: "abc",
                selectedUser: null,
                users: [user],
                selectedNationalities: ["CH"]
            }
        });
    });


    it('renders correctly', () => {
        const tree = renderer
            .create(<Provider store={store}><SettingsFormContainer onSettingsSaved={() => {}} /></Provider>)
            .toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('validates if nationlity has been chosen', () => {
        const callbackMock = jest.fn();
        const component = mount(<Provider store={store}><SettingsFormContainer onSettingsSaved={callbackMock} /></Provider>);

        expect(component).toMatchSnapshot();
        expect(callbackMock).toBeCalledTimes(0);

        component.find('.switch').at(0).simulate('click');
        component.find('button').simulate('click');
        expect(component).toMatchSnapshot();
        expect(callbackMock).toBeCalledTimes(0);
        expect(store.getState().selectedNationalities).toStrictEqual(["CH"]);
        expect(store.getState().users).toStrictEqual([user]);
        expect(store.getState().seed).toBe("abc");

    });

    it('saves selected nationalities and triggers onSettingsSaved event', () => {
        const callbackMock = jest.fn();
        const component = mount(<Provider store={store}><SettingsFormContainer onSettingsSaved={callbackMock} /></Provider>);

        expect(component).toMatchSnapshot();
        expect(callbackMock).toBeCalledTimes(0);

        component.find('.switch').at(1).simulate('click');
        component.find('button').simulate('click');
        expect(component).toMatchSnapshot();
        expect(callbackMock).toBeCalledTimes(1);
        expect(store.getState().selectedNationalities).toStrictEqual(["CH", "ES"]);
        expect(store.getState().users).toStrictEqual([]);
        expect(store.getState().seed).toBe("");
    });
});
