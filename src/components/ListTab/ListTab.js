import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { List, Datagrid } from 'react-admin';

import { withRouter } from 'react-router-dom';

export const UserList = ({ fields, ...restProps }) => (
    <List {...restProps}>
        <Datagrid rowClick='edit'>
            {fields.map((field, i) => <field.component key={i} source={field.source} />)}
        </Datagrid>
    </List>
);

const ListTab = ({ tab, history }) => {
    const listProps = {
        basePath: tab.url,
        hasCreate: false,
        hasEdit: false,
        hasList: true,
        hasShow: false,
        history: {},
        match: { path: '/', url: '/', isExact: true, params: {} },
        options: {},
        permissions: null,
        resource: tab.data
    };
    const [dynamicListProps, setDynamicListProps] = useState({
        location: { pathname: '/', search: '', hash: '', state: undefined },
        page: 1,
        perPage: 10
    });

    useEffect(() => {
        const unlisten = history.listen((location) => {
            if (location.search) {
                const queryParams = JSON.parse('{"' + decodeURI(location.search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g,'":"') + '"}');
                const perPage = +queryParams.perPage;
                const page = +queryParams.page;
                const newListProps = {
                    ...listProps,
                    perPage,
                    page,
                    location
                };

                setDynamicListProps(newListProps);
            }
        });

        return () => {
            unlisten();
        }
    }, []);

    return <div>
        <UserList {...listProps} {...dynamicListProps} history={history} fields={tab.fields} />
    </div>;
};

ListTab.propTypes = {
    tab: PropTypes.object
};

ListTab.defaultProps = {
    tab: {}
};


export default withRouter(ListTab);
