import ReactDOM from 'react-dom';

import * as React from "react";
import { Redirect, Route } from "react-router-dom";
import { HydraAdmin, ResourceGuesser, hydraDataProvider as baseHydraDataProvider, fetchHydra as baseFetchHydra, useIntrospection  } from "@api-platform/admin";
import parseHydraDocumentation from "@api-platform/api-doc-parser/lib/hydra/parseHydraDocumentation";
import polyglotI18nProvider from 'ra-i18n-polyglot';
import frenchMessages from 'ra-language-french';
import BaseLayout from "./layout/BaseLayout"
import UserCreate from "./components/User/UserCreate";
import EntiteCreate from "./components/Entite/EntiteCreate";
import EntiteEdit from "./components/Entite/EntiteEdit";
import EntiteShow from "./components/Entite/EntiteShow";
import EntiteList from "./components/Entite/EntiteList";
import authProvider from "./components/authProvider";
import { PageLogin } from './components/PageLogin';

// domain translations
// require('./i18n/fr');

const entrypoint = process.env.ENTRY_POINT_API;
const getHeaders = () => localStorage.getItem("token") ? {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
} : {};
const fetchHydra = (url, options = {}) =>
    baseFetchHydra(url, {
        ...options,
        headers: getHeaders,
    });
const RedirectToLogin = () => {
    const introspect = useIntrospection();

    if (localStorage.getItem("token")) {
        introspect();
        return <></>;
    }
    return <Redirect to="/login" />;
};
const apiDocumentationParser = async (entrypoint) => {
    try {
        const { api } = await parseHydraDocumentation(entrypoint, { headers: getHeaders });
        return { api };
    } catch (result) {
        if (result.status === 401) {
            // Prevent infinite loop if the token is expired
            localStorage.removeItem("token");

            return {
                api: result.api,
                customRoutes: [
                    <Route path="/" component={RedirectToLogin} />
                ],
            };
        }

        throw result;
    }
};
const dataProvider = baseHydraDataProvider(entrypoint, fetchHydra, apiDocumentationParser);

const i8nProvider = polyglotI18nProvider(() => frenchMessages, 'fr');

// const i8nProvider = polyglotI18nProvider(locale => messages);
console.log(process.env.ENTRY_POINT_API)
const App = () => (
    <HydraAdmin dataProvider={dataProvider} authProvider={authProvider} entrypoint={entrypoint} layout={BaseLayout} i18nProvider={i8nProvider} locale="fr">
        {/*<ResourceGuesser name="users" create={UserCreate} options={{label: "Utilisateurs"}}/>*/}
        {/*<ResourceGuesser name="profiles" options={{label: "Profiles"}}/>*/}
        {/*<ResourceGuesser name="sites" options={{label: "Sites"}}/>*/}
        {/*<ResourceGuesser name="entites" list={EntiteList} show={EntiteShow} edit={EntiteEdit} create={EntiteCreate} options={{label: "Entités"}}/>*/}
        {/*<ResourceGuesser name="entite_types" options={{label: "Type d'entités"}}/>*/}
    </HydraAdmin>
);
ReactDOM.render(
<App
/>,
    document.getElementById('root')
)