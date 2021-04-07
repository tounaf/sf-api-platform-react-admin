import React from "react";
import {
    CreateGuesser,
    InputGuesser
} from "@api-platform/admin";
import { ReferenceInput, AutocompleteInput } from "react-admin";

const UserCreate = props => (
    <CreateGuesser {...props}>
        <InputGuesser source="photoProfile" />
        <InputGuesser source="email" />
        <InputGuesser source="login" />
        <InputGuesser source="username" />
        <InputGuesser source="nom" />
        <InputGuesser source="prenom" />
        <InputGuesser source="situationMatrimoniale" />
        <InputGuesser source="civilite" />
        <InputGuesser source="dateDeNaissance" />
        <InputGuesser source="competence" />
        <InputGuesser source="dateEntree" />
        <InputGuesser source="date_sortie" />
        <InputGuesser source="remarque" />
        <InputGuesser source="enable" />
        <InputGuesser source="entite" />
        <ReferenceInput
            source="profiles"
            reference="profiles"
            label="Profile"
            filterToQuery={searchText => ({ libelle: searchText })}
        >
            <AutocompleteInput optionText="libelle" />
        </ReferenceInput>
    </CreateGuesser>
);

export default UserCreate;