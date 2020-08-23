import * as React from 'react';
import renderer from 'react-test-renderer';
import {mount} from "../../enzyme";
import {Provider} from "react-redux";
import {configureStore, EnhancedStore} from "@reduxjs/toolkit";
import {rootReducer} from "../../state/rootReducer";
import {SearchFormContainer} from "./SearchFormContainer";

describe("<SearchFormContainer />", () => {

    it('renders correctly', () => {
        const store = configureStore({
            reducer: rootReducer,
            preloadedState: {
                seed: "abc",
                selectedUser: null,
                users: [],
                selectedNationalities: ["CH"],
                searchTerm: "",
            }
        });

        const tree = renderer
            .create(<Provider store={store}><SearchFormContainer /></Provider>)
            .toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('saves search term', () => {
        const store = configureStore({
            reducer: rootReducer,
            preloadedState: {
                seed: "abc",
                selectedUser: null,
                users: [],
                selectedNationalities: ["CH"],
                searchTerm: "",
            }
        });

        const component = mount(<Provider store={store}><SearchFormContainer /></Provider>);

        expect(component).toMatchSnapshot();

        component.find('input').simulate('change', {target: {value: "abc"}});
        expect(component).toMatchSnapshot();
        expect(store.getState().searchTerm).toStrictEqual("abc");
    });

    it('clears search term', () => {
        const store = configureStore({
            reducer: rootReducer,
            preloadedState: {
                seed: "abc",
                selectedUser: null,
                users: [],
                selectedNationalities: ["CH"],
                searchTerm: "abc",
            }
        });

        const component = mount(<Provider store={store}><SearchFormContainer /></Provider>);

        expect(component).toMatchSnapshot();

        component.find('.search-form--close').simulate('click');
        expect(component).toMatchSnapshot();
        expect(store.getState().searchTerm).toStrictEqual("");
    });
});
