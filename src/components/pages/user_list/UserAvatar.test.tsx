import * as React from 'react';
import renderer from 'react-test-renderer';
import {UserAvatar} from "./UserAvatar";

describe("<UserAvatar />", () => {
    it('renders correctly', () => {
        const tree = renderer
            .create(<UserAvatar path={"test.jpg"} />)
            .toJSON();

        expect(tree).toMatchSnapshot();
    });
});
