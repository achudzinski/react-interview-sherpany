import * as React from 'react';
import {GridList} from "./GridList";
import renderer from 'react-test-renderer';

describe("<GridList />", () => {
    it('renders correctly', () => {
        const items = [<div key={"A"}>A</div>, <div key={"B"}>B</div>, <div key={"C"}>C</div>];
        const tree = renderer
            .create(<GridList items={items}></GridList>)
            .toJSON();

        expect(tree).toMatchSnapshot();
    });

});
