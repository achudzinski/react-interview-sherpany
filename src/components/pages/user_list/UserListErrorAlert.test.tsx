import * as React from 'react';
import renderer from 'react-test-renderer';
import {UserListErrorAlert} from "./UserListErrorAlert";

describe("<UserListErrorAlert />", () => {
    it('renders correctly', () => {
        const tree = renderer
            .create(<UserListErrorAlert>Test</UserListErrorAlert>)
            .toJSON();

        expect(tree).toMatchSnapshot();
    });
});
