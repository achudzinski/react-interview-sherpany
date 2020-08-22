import * as React from "react";
import {SettingsForm} from "./SettingsForm";
import {useEffect, useState} from "react";

import {useDispatch, useSelector} from "react-redux";
import {
    AVAILABLE_NATIONALITIES,
    selectedNationalitiesSelector,
    selectNationalities
} from "../../state/selectedNationalities";
import {clearUsers} from "../../state/users";
import {clearSeed} from "../../state/seed";
import {persistNationalities} from "../../services/localStorage";
import {NationalityType} from "../../models/NationalityType";


export interface SettingsFormContainerProps {
    onSettingsSaved: () => void,
}

export const SettingsFormContainer = ({onSettingsSaved}:SettingsFormContainerProps) => {

    const dispatch = useDispatch();
    const selectedNationalities = useSelector(selectedNationalitiesSelector);
    const [nationalities, setNationalities] = useState<NationalityType[]>([]);
    const [error, setError] = useState("");

    useEffect(() => { // initialise local state
        const defaultNationalities = Object.keys(AVAILABLE_NATIONALITIES).map(code => {
            return {
                code,
                name: AVAILABLE_NATIONALITIES[code as keyof typeof AVAILABLE_NATIONALITIES],
                selected: selectedNationalities.find(
                        (selectedCode:any) => selectedCode === code
                    ) !== undefined
            }
        });
        setNationalities(defaultNationalities);
    }, [selectedNationalities]);

    const handleOnNationalityChange = (code:string) => {
        setNationalities(nationalities => nationalities.map(
            nationality => nationality.code === code
                ? {...nationality, selected: !nationality.selected}
                : nationality
        ));
    };

    const handleOnFormSubmit = () => {
        const nationalitiesCodes = nationalities
            .filter(nationality => nationality.selected)
            .map(nationality => nationality.code);

        if (nationalitiesCodes.length === 0) {
            setError("Select at least one nationality to see users");
            return;
        }

        setError('');

        persistNationalities(nationalitiesCodes);
        dispatch(selectNationalities(nationalitiesCodes));
        dispatch(clearUsers());
        dispatch(clearSeed());

        onSettingsSaved();
    };

    return <SettingsForm
        nationalities={nationalities}
        onFormSubmit={handleOnFormSubmit}
        onNationalityChange={handleOnNationalityChange}
        error={error}
    />;
};