import React from "react";
import {
    CreateGuesser,
    InputGuesser
} from "@api-platform/admin";
import { ReferenceInput, AutocompleteInput } from "react-admin";

const EntiteCreate = props => (
    <CreateGuesser {...props}>
        <InputGuesser source="libelle" />
        <InputGuesser source="code" />
        <ReferenceInput
            source="sites"
            reference="sites"
            label="Site"
            filterToQuery={searchText => ({ libelle: searchText })}
            >
            <AutocompleteInput optionText="libelle" />
        </ReferenceInput>
        <ReferenceInput
            source="entite_types"
            reference="entite_types"
            label="Type d'entité"
            filterToQuery={searchText => ({ libelle: searchText })}
        >
            <AutocompleteInput optionText="libelle" />
        </ReferenceInput>
    </CreateGuesser>
);

export default EntiteCreate;