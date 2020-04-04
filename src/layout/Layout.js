import React from 'react';
import { Layout } from 'react-admin';
import Menu from '../components/Menu/Menu';

const CustomLayout = (props) => {
    return (
        <Layout
            {...props}
            menu={Menu}
        />
    );
};

export default CustomLayout;
