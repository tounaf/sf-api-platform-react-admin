import ReactDOM from 'react-dom';

import * as React from "react";
import { HydraAdmin, ResourceGuesser  } from "@api-platform/admin";
import polyglotI18nProvider from 'ra-i18n-polyglot';
import frenchMessages from 'ra-language-french';
import BaseLayout from "./layout/BaseLayout"
// domain translations
// require('./i18n/fr');

const dataProvider = process.env.ENTRY_POINT_API;
const i8nProvider = polyglotI18nProvider(() => frenchMessages, 'fr');

// const i8nProvider = polyglotI18nProvider(locale => messages);
console.log(process.env.ENTRY_POINT_API)
const App = () => (
    <HydraAdmin entrypoint={dataProvider} layout={BaseLayout} i18nProvider={i8nProvider} locale="fr">
        <ResourceGuesser name="sites" options={{label: "Liste site"}}/>
    </HydraAdmin>
);
ReactDOM.render(
<App
/>,
    document.getElementById('root')
)