import * as React from 'react';
import {CloseIcon} from "../../../src/components/icons/CloseIcon";
import renderer from "react-test-renderer";

describe("<CloseIcon />", () => {
    it('renders correctly', () => {
        const tree = renderer
            .create(<CloseIcon />)
            .toJSON();

        expect(tree).toMatchSnapshot();
    });
});
