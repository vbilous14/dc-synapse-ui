import React from 'react';
import { Admin, Resource, ShowGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { Layout } from './layout';

import { PostList } from './posts';
import { UserList } from './users';
import Dashboard from './dashboard/Dashboard';
import authProvider from './authProvider';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const App = () => {
    return (
        <Admin
            layout={Layout}
            dashboard={Dashboard}
            dataProvider={dataProvider}
            authProvider={authProvider}
        >
            <Resource name="users" list={UserList} options={{ label: 'Users List' }} />
            <Resource name="posts" list={PostList} options={{ label: 'Posts List' }} />
        </Admin>
    );
}

export default App;
