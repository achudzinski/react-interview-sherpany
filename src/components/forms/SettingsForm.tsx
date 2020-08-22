import * as React from "react";
import {Button} from "./elements/Button";
import {Switch} from "./elements/Switch";
import {FieldLabel} from "./elements/FieldLabel";
import "./SettingsForm.scss";
import {Error} from "./elements/Error";
import {NationalityType} from "../../models/NationalityType";

export interface SettingsFormProps {
    nationalities: NationalityType[],
    onFormSubmit: () => void,
    onNationalityChange: (nationality:string) => void,
    error?: string,
}

export const SettingsForm = ({nationalities, error, onNationalityChange, onFormSubmit}:SettingsFormProps) => {

    const nationalitiesSwitches = nationalities.map(
        nationality => (
            <div className={"settings-form--group"} key={nationality.code}>
                <FieldLabel>{nationality.name}</FieldLabel>
                <Switch
                    isOn={nationality.selected}
                    onChange={() => onNationalityChange(nationality.code)}
                />
            </div>
        )
    );

    return (
        <div className={"settings-form"}>
            {error && <Error>{error}</Error>}
            {nationalitiesSwitches}
            <Button onClick={onFormSubmit}>Save settings</Button>
        </div>
    )
};