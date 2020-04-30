import React from 'react';
import { Admin } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

const dataProvider = jsonServerProvider('http://localhost:8080/adoption');
const App = () => <Admin dataProvider={dataProvider} />;

export default App;
