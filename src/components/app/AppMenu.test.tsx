import * as React from 'react';
import {AppMenu} from "./AppMenu";
import renderer from 'react-test-renderer';
import {MemoryRouter} from "react-router";


describe("<AppMenu />", () => {
    it('renders correctly', () => {
        const tree = renderer
            .create(<MemoryRouter><AppMenu /></MemoryRouter>)
            .toJSON();

        expect(tree).toMatchSnapshot();
    });
});
