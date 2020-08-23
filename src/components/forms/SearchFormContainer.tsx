import * as React from "react";
import {useDispatch, useSelector} from "react-redux";
import {StateType} from "../../state/StateType";
import {searchForUsers} from "../../state/searchTerm";
import {TextField} from "./elements/TextField";
import {FieldLabel} from "./elements/FieldLabel";
import "./SearchForm.scss";
import {CloseIcon} from "../icons/CloseIcon";

export const SearchFormContainer = () => {

    const dispatch = useDispatch();
    const searchTerm = useSelector((state:StateType) => state.searchTerm);

    const handleOnChange = (newSearchTerm:string) => {
        dispatch(searchForUsers(newSearchTerm));
    };

    return (
        <div className={"search-form"}>
            <FieldLabel>Search by first and last name:</FieldLabel>
            <TextField onChange={handleOnChange} value={searchTerm} />
            {searchTerm != "" && <div onClick={() => handleOnChange("")} className={"search-form--close"}><CloseIcon/></div>}
        </div>
    );
};