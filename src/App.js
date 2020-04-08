import React from 'react';
import { Admin, Resource } from 'react-admin';
import { Provider } from 'react-redux';
import jsonServerProvider from 'ra-data-json-server';
import Layout from './layout/Layout';
import themes from './themes';
import Profile from './pages/Profile/Profile';
import Operations from './pages/Operations/Operations';
import { Route } from 'react-router-dom';
import { createHashHistory } from 'history';
import createAdminStore from './store/createAdminStore';

import { OPERATIONS } from './constants/constants'

import authProvider from './authProvider';

// const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
const dataProvider = jsonServerProvider('https://my-json-server.typicode.com/vbilous-upwork/dc-synapse-ui-mocks'); // For claims testing
const history = createHashHistory();

const App = () => {
    return (
        <Provider
            store={createAdminStore({
                authProvider,
                dataProvider,
                history,
            })}
        >
            <Admin
                theme={themes}
                layout={Layout}
                dataProvider={dataProvider}
                authProvider={authProvider}
                history={history}
                customRoutes={
                    [
                        <Route exact path='/profile' component={Profile} />,
                        <Route exact path='/operations' component={Operations} />
                    ]
                }
            >
                {OPERATIONS.map(operation => <Resource name={operation.data} />)}
            </Admin>
        </Provider>
    );
};

export default App;
