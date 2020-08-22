import * as React from 'react';
import renderer from 'react-test-renderer';
import {FieldLabel} from "./FieldLabel";
import {Switch} from "./Switch";
import {shallow} from "../../../enzyme";

describe("<Switch />", () => {
    it('renders correctly in ON state', () => {
        const tree = renderer
            .create(<Switch isOn={true} onChange={() => {}} />)
            .toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('renders correctly in OFF state', () => {
        const tree = renderer
            .create(<Switch isOn={false} onChange={() => {}} />)
            .toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('can change state', () => {
        const callbackMock = jest.fn();
        const component = shallow(<Switch isOn={false} onChange={callbackMock} />);

        expect(callbackMock).toBeCalledTimes(0);

        component.simulate('click');
        expect(callbackMock).toBeCalledTimes(1);
    });
});
