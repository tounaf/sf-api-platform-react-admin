import ReactDOM from 'react-dom';

import * as React from "react";
import { HydraAdmin, ResourceGuesser  } from "@api-platform/admin";
import polyglotI18nProvider from 'ra-i18n-polyglot';
import frenchMessages from 'ra-language-french';
import BaseLayout from "./layout/BaseLayout"
import UserCreate from "./components/User/UserCreate";
import EntiteCreate from "./components/Entite/EntiteCreate";
import EntiteEdit from "./components/Entite/EntiteEdit";
import EntiteShow from "./components/Entite/EntiteShow";
import EntiteList from "./components/Entite/EntiteList";
import authProvider from './components/authProvider';
// domain translations
// require('./i18n/fr');

const dataProvider = process.env.ENTRY_POINT_API;
const i8nProvider = polyglotI18nProvider(() => frenchMessages, 'fr');

// const i8nProvider = polyglotI18nProvider(locale => messages);
console.log(process.env.ENTRY_POINT_API)
const App = () => (
    <HydraAdmin entrypoint={dataProvider} authProvider={authProvider} layout={BaseLayout} i18nProvider={i8nProvider} locale="fr">
        <ResourceGuesser name="users" create={UserCreate} options={{label: "Utilisateurs"}}/>
        <ResourceGuesser name="profiles" options={{label: "Profiles"}}/>
        <ResourceGuesser name="sites" options={{label: "Sites"}}/>
        <ResourceGuesser name="entites" list={EntiteList} show={EntiteShow} edit={EntiteEdit} create={EntiteCreate} options={{label: "Entités"}}/>
        <ResourceGuesser name="entite_types" options={{label: "Type d'entités"}}/>
    </HydraAdmin>
);
ReactDOM.render(
<App
/>,
    document.getElementById('root')
)