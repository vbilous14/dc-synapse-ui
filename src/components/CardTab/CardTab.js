import React from 'react';
import PropTypes from 'prop-types';

import { Edit, SimpleForm, showNotification as showNotificationAction, TopToolbar, ShowButton } from 'react-admin';

import { withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';

export const Card = ({ fields, actions, ...restProps }) => (
    <Edit {...restProps} actions={actions}>
        <SimpleForm>
            {fields.map((field, i) => <field.component key={i} source={field.source} />)}
        </SimpleForm>
    </Edit>
);

const CardActions = ({ basePath, data, resource }) => {
    return (
        <TopToolbar>
            <ShowButton basePath={basePath} record={data} />
            {/* Add your custom actions */}
            {/*<Button color="primary" onClick={customAction}>Custom Action</Button>*/}
        </TopToolbar>
    );
};

const CardTab = ({ tab, history }) => {
    const dispatch = useDispatch();
    const editProps = {
        basePath: `${tab.url}/${tab.dataId}`,
        history: {},
        match: { path: '/', url: '/', isExact: true, params: {} },
        resource: tab.data,
        id: tab.dataId,
        location: { pathname: '/', search: '', hash: '', state: undefined }
    };
    const handleSave = () => {
        dispatch(showNotificationAction('Data saved successfully'));
    };

    return <div>
        <Card
            {...editProps}
            history={history}
            fields={tab.editFields}
            toolbar={<CardActions />}
        />
    </div>;
};

CardTab.propTypes = {
    tab: PropTypes.object
};

CardTab.defaultProps = {
    tab: {}
};


export default withRouter(CardTab);
