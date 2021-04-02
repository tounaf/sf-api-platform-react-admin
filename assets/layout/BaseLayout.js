// in src/MyLayout.js
import * as React from 'react';
import { Layout } from 'react-admin';
import NavBar from './NavBar';
import Menu from './Menu';

const BaseLayout = (props) => <Layout {...props} appBar={NavBar} menu={Menu}/>;

export default BaseLayout;