import * as React from 'react';
import renderer from 'react-test-renderer';
import {AppHeader} from "./AppHeader";
import {MemoryRouter} from "react-router";

describe("<AppHeader />", () => {
    it('renders correctly', () => {
        const tree = renderer
            .create(<MemoryRouter><AppHeader /></MemoryRouter>)
            .toJSON();

        expect(tree).toMatchSnapshot();
    });
});
