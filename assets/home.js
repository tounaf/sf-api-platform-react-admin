import ReactDOM from 'react-dom';

import * as React from "react";
import { Admin, Resource, ListGuesser, List, Datagrid, TextField, EmailField } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

const dataProvider = jsonServerProvider('http://localhost:8001/api');
const App = () => (
    <Admin dataProvider={dataProvider} >
        <Resource name="users" list={UserList} />
    </Admin>
);
const UserList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="username" />
            <EmailField source="email" />
        </Datagrid>
    </List>
);
ReactDOM.render(
<App
/>,
    document.getElementById('root')
)