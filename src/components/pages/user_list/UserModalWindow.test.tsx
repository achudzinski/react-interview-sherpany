import * as React from 'react';
import renderer from 'react-test-renderer';
import {UserType} from "../../../models/UserType";
import {mount} from "../../../enzyme";
import {UserModalWindow} from "./UserModalWindow";

const user:UserType = {
    id: "123",
    email: 'test@test.com',
    username: 'test',
    firstName: 'te',
    lastName: 'st',
    cell: "+44 000 000 000",
    phone: "+44 111 111 111",
    pictureThumbnail: "a.jpg",
    location: {
        city: "Manchestr",
        postcode: "M1M2",
        state: "abc",
        streetName: "def",
        streetNumber: 123
    }
};

describe("<UserListItem />", () => {
    it('renders correctly', () => {
        const tree = renderer
            .create(<UserModalWindow user={user} onCloseClick={() => {}} />)
            .toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('can be closed by clicking x button', () => {
        const mockCallBack = jest.fn();
        const component = mount((<UserModalWindow user={user} onCloseClick={mockCallBack} />));

        expect(mockCallBack).toBeCalledTimes(0);
        component.find('.modal-window--close').simulate('click');

        expect(mockCallBack).toBeCalledTimes(1);
    });

    it('can be closed by clicking on overlay', () => {
        const mockCallBack = jest.fn();
        const component = mount((<UserModalWindow user={user} onCloseClick={mockCallBack} />));

        expect(mockCallBack).toBeCalledTimes(0);
        component.simulate('click');

        expect(mockCallBack).toBeCalledTimes(1);
    });

    it('cannot be closed by clicking on modal content', () => {
        const mockCallBack = jest.fn();
        const component = mount((<UserModalWindow user={user} onCloseClick={mockCallBack} />));

        expect(mockCallBack).toBeCalledTimes(0);
        component.find('.modal-window--content').simulate('click');

        expect(mockCallBack).toBeCalledTimes(0);
    });
});
