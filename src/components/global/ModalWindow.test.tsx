import * as React from 'react';
import renderer from "react-test-renderer";
import {shallow} from "../../enzyme";
import {ModalWindow} from "./ModalWindow";

describe("<ModalWindow />", () => {
    it('renders correctly', () => {
        const tree = renderer
            .create(<ModalWindow onCloseClick={() => {}}><div>Test</div></ModalWindow>)
            .toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('renders correctly with class name', () => {
        const tree = renderer
            .create(<ModalWindow className={"test-class"} onCloseClick={() => {}}>abc</ModalWindow>)
            .toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('can be closed by clicking x button', () => {
        const mockCallBack = jest.fn();

        const component = shallow((<ModalWindow onCloseClick={mockCallBack}><div>Test</div></ModalWindow>));

        expect(mockCallBack).toBeCalledTimes(0);
        component.find('.modal-window--close').simulate('click');

        expect(mockCallBack).toBeCalledTimes(1);
    });

    it('can be closed by clicking overlay', () => {
        const mockCallBack = jest.fn();

        const component = shallow((<ModalWindow onCloseClick={mockCallBack}><div>Test</div></ModalWindow>));

        expect(mockCallBack).toBeCalledTimes(0);
        component.find('.modal-window').simulate('click');

        expect(mockCallBack).toBeCalledTimes(1);
    });

    it('does not close if clicked on content', () => {
        const mockCallBack = jest.fn();

        const component = shallow((<ModalWindow onCloseClick={mockCallBack}><div>Test</div></ModalWindow>));

        expect(mockCallBack).toBeCalledTimes(0);
        component.find('.modal-window--content').simulate('click', { stopPropagation() {} });

        expect(mockCallBack).toBeCalledTimes(0);
    });
});
