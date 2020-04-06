import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { List, Datagrid } from 'react-admin';
import { useDispatch } from 'react-redux';

import { withRouter } from 'react-router-dom';
import addTabAction from '../../actions/addTab';

export const ItemsList = ({ fields, onRowClick, ...restProps }) => (
    <List {...restProps}>
        <Datagrid rowClick={onRowClick}>
            {fields.map((field, i) => <field.component key={i} source={field.source} />)}
        </Datagrid>
    </List>
);

const ListTab = ({ tab, history }) => {
    const dispatch = useDispatch();
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
    const handleRowClick = (id, url, dataObj) => {
        dispatch(addTabAction({
            url,
            editFields: tab.editFields,
            name: dataObj.name || dataObj.title,
            data: tab.data,
            dataId: id,
            type: tab.subtype
        }))
    };

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
        <ItemsList
            {...listProps}
            {...dynamicListProps}
            history={history}
            fields={tab.fields}
            onRowClick={handleRowClick}
        />
    </div>;
};

ListTab.propTypes = {
    tab: PropTypes.object
};

ListTab.defaultProps = {
    tab: {}
};


export default withRouter(ListTab);
