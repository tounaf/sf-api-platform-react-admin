import React from "react";
import {
    ShowGuesser,
    FieldGuesser
} from "@api-platform/admin";
import { ReferenceField, TextField} from "react-admin";

const EntiteShow = props => (
    <ShowGuesser {...props}>
        <FieldGuesser source="libelle" addLabel={true}/>
        <FieldGuesser source="code" addLabel={true}/>
        <ReferenceField label="Site" source="site" reference="sites">
            <TextField source="libelle" />
        </ReferenceField>
        <ReferenceField label="Type" source="type" reference="entite_types">
            <TextField source="libelle" />
        </ReferenceField>
    </ShowGuesser>
);

export default EntiteShow;