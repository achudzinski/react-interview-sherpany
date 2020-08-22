import * as React from 'react';
import renderer from 'react-test-renderer';
import {UserAvatar} from "./UserAvatar";
import {UserListItem} from "./UserListItem";
import {UserType} from "../../../models/UserType";
import {shallow} from "../../../enzyme";
import {ModalWindow} from "../../global/ModalWindow";

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
            .create(<UserListItem user={user} onClick={() => {}} />)
            .toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('can be clicked', () => {
        const mockCallBack = jest.fn();
        const component = shallow((<UserListItem user={user} onClick={mockCallBack}></UserListItem>));

        expect(mockCallBack).toBeCalledTimes(0);
        component.simulate('click');

        expect(mockCallBack).toBeCalledTimes(1);
    });
});
