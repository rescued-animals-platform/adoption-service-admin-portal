import React from 'react';
import Dashboard from './common';
import AnimalList from './animal';
import { Admin, Resource } from 'react-admin';
import dataProvider from './data-provider/dataProvider';
import i18nProvider from './i18n/i18nProvider';
import customTheme from './theme/theme';


const App = () => (
  <Admin theme={customTheme} dashboard={ Dashboard } dataProvider = { dataProvider } i18nProvider={i18nProvider} >
    <Resource name = "animals" list = { AnimalList }/>
  < /Admin >
);

export default App;
