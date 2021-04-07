import React from "react";
import {
    EditGuesser,
    InputGuesser
} from "@api-platform/admin";
import { ReferenceInput, AutocompleteInput, TextField, SelectInput } from "react-admin";

const EntiteEdit = props => (
    <EditGuesser {...props}>
        <InputGuesser source="libelle"/>
        <InputGuesser source="code"/>
        <ReferenceInput
            source="sites"
            reference="sites"
            label="Site"
            >
            <SelectInput optionText="libelle" />
        </ReferenceInput>
        <ReferenceInput
            source="entite_types"
            reference="entite_types"
            label="Type d'entité"
        >
            <SelectInput optionText="libelle" />
        </ReferenceInput>
    </EditGuesser>
);

export default EntiteEdit;