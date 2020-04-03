import React from 'react';
import { Layout } from 'react-admin';
import Menu from './Menu';

export default (props: any) => {
    return (
        <Layout
            {...props}
            menu={Menu}
        />
    );
};
