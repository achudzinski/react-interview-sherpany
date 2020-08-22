import * as React from "react";
import {SettingsFormContainer} from "../forms/SettingsFormContainer";
import {useState} from "react";
import {getUrlToUserList} from "../../services/urlManager";
import {Redirect} from "react-router";

export const SettingsPage = () => {
    const [formSaved, setFormSaved] = useState(false);

    const handleOnSettingsSaved = () => {
        setFormSaved(true);
    };

    return (
        <div>
            {formSaved
                ? <Redirect to={getUrlToUserList()}/>
                : <SettingsFormContainer onSettingsSaved={handleOnSettingsSaved}/>
            }

        </div>
    );
};