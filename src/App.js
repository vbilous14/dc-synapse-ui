import React from 'react';
import { Admin } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import Layout from './layout/Layout';
import customSagas from './customSagas';
import themes from './themes';
import Operations from './pages/Operations/Operations';
import Profile from './pages/Profile/Profile';
import Members from './pages/Members/Members';
import { Route } from 'react-router-dom';

import './App.css';

import authProvider from './authProvider';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const App = () => {
    return (
        <Admin
            theme={themes}
            customSagas={customSagas}
            layout={Layout}
            dataProvider={dataProvider}
            authProvider={authProvider}
            customRoutes={
                [
                    <Route exact path="/profile" component={Profile} />,
                    <Route exact path="/operations" component={Operations} />,
                    <Route exact path="/operations/members" component={Members} />,
                ]
            }
        >
            <div></div>
        </Admin>
    );
};

export default App;
