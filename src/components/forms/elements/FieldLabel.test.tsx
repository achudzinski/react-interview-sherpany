import * as React from 'react';
import renderer from 'react-test-renderer';
import {FieldLabel} from "./FieldLabel";

describe("<FieldLabel />", () => {
    it('renders correctly', () => {
        const tree = renderer
            .create(<FieldLabel>Test 123</FieldLabel>)
            .toJSON();

        expect(tree).toMatchSnapshot();
    });
});
