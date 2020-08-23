import * as React from 'react';
import {Button} from "./Button";
import renderer from 'react-test-renderer';
import {shallow} from "../../../enzyme";
import {TextField} from "./TextField";

describe("<TextField />", () => {
    it('renders correctly', () => {
        const tree = renderer
            .create(<TextField onChange={() => {}} value={"Abc"} />)
            .toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('informs about changing', () => {
        const mockCallBack = jest.fn();

        const button = shallow((<TextField onChange={mockCallBack} value={"Abc"} />));

        expect(mockCallBack).toBeCalledTimes(0);
        button.find('input').simulate('change', {target: { value: "Abcd"}});

        expect(mockCallBack).toBeCalledTimes(1);
        expect(mockCallBack).toBeCalledWith("Abcd");
    });
});
