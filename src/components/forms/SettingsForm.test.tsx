import * as React from 'react';
import renderer from 'react-test-renderer';
import {mount, shallow} from "../../enzyme";
import {SettingsForm} from "./SettingsForm";
import {NationalityType} from "../../models/NationalityType";

const nationalities:NationalityType[] = [
    {
        code: "CH",
        selected: false,
        name: "Swiss",
    },
    {
        code: "GB",
        selected: true,
        name: "British",
    },
];

describe("<SettingsForm />", () => {
    it('renders correctly without errors', () => {
        const tree = renderer
            .create(<SettingsForm
                nationalities={nationalities}
                error={undefined}
                onNationalityChange={() => {}}
                onFormSubmit={() => {}}
            />)
            .toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('renders correctly with errors', () => {
        const tree = renderer
            .create(<SettingsForm
                nationalities={nationalities}
                error={"Test error"}
                onNationalityChange={() => {}}
                onFormSubmit={() => {}}
            />)
            .toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('can be submit', () => {
        const callbackMock = jest.fn();
        const component = mount(<SettingsForm
            nationalities={nationalities}
            error={undefined}
            onNationalityChange={() => {}}
            onFormSubmit={callbackMock}
        />);

        expect(callbackMock).toBeCalledTimes(0);

        component.find('button').simulate('click');
        expect(callbackMock).toBeCalledTimes(1);
    });

    it('can change nationlity', () => {
        const callbackMock = jest.fn();
        const component = mount(<SettingsForm
            nationalities={nationalities}
            error={undefined}
            onNationalityChange={callbackMock}
            onFormSubmit={() => {}}
        />);

        expect(callbackMock).toBeCalledTimes(0);

        component.find('.switch').at(1).simulate('click');
        expect(callbackMock).toBeCalledTimes(1);
    });
});
