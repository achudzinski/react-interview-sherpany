import * as React from 'react';
import renderer from 'react-test-renderer';
import {UserAvatar} from "./UserAvatar";
import {UserList} from "./UserList";
import {mount, shallow} from "../../../enzyme";
import {UserListItem} from "./UserListItem";

const user1 = {
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

const user2 = {
    id: "456",
    email: 'test2@test.com',
    username: 'test2',
    firstName: 'te2',
    lastName: 'st2',
    cell: "+44 000 000 001",
    phone: "+44 111 111 112",
    pictureThumbnail: "b.jpg",
    location: {
        city: "Manchestr",
        postcode: "M1M2",
        state: "abc",
        streetName: "def",
        streetNumber: 123
    }
};

const users = [
    user1,
    user2,
];

describe("<UserList />", () => {
    it('renders correctly', () => {
        const tree = renderer
            .create(<UserList
                users={users}
                endOfList={false}
                loadingError={false}
                onLoadMore={() => {}}
                onUserSelected={() => {}}
            />)
            .toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('renders correctly with end of list alert', () => {
        const tree = renderer
            .create(<UserList
                users={users}
                endOfList={true}
                loadingError={false}
                onLoadMore={() => {}}
                onUserSelected={() => {}}
            />)
            .toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('renders correctly with loading error alert', () => {
        const tree = renderer
            .create(<UserList
                users={users}
                endOfList={false}
                loadingError={true}
                onLoadMore={() => {}}
                onUserSelected={() => {}}
            />)
            .toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('user can be selected', () => {
        const mockCallBack = jest.fn();
        const component = mount((<UserList
            users={users}
            endOfList={true}
            loadingError={false}
            onLoadMore={() => {}}
            onUserSelected={mockCallBack}
        />));

        expect(mockCallBack).toBeCalledTimes(0);

        component.find('.user-list-item').at(0).simulate('click');
        expect(mockCallBack).toBeCalledTimes(1);
        expect(mockCallBack).toBeCalledWith(user1);

        component.find('.user-list-item').at(1).simulate('click');
        expect(mockCallBack).toBeCalledTimes(2);
        expect(mockCallBack).toBeCalledWith(user2);
    });
});
