import React from 'react';
import PropTypes from 'prop-types';

import { Edit, SimpleForm, showNotification as showNotificationAction, SaveButton, DeleteButton, Toolbar } from 'react-admin';

import { withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import removeTabAction from '../../actions/removeTab';

export const Card = ({ fields, actions, toolbar, ...restProps }) => (
    <Edit {...restProps} actions={actions}>
        <SimpleForm toolbar={toolbar}>
            {fields.map((field, i) => <field.component key={i} source={field.source} />)}
        </SimpleForm>
    </Edit>
);

const CardActions = ({ onSave, onRemove, ...restProps }) => {
    return (
        <Toolbar {...restProps} >
            <SaveButton
                onSave={onSave}
                redirect={false}
                label="Save"
            />
            <DeleteButton
                onClick={onRemove}
                redirect={false}
                label="Remove"
            />
        </Toolbar>
    );
};

const CardTab = ({ tab, tabIndex, history }) => {
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
    const handleRemove = () => {
        dispatch(removeTabAction(tabIndex));
    };

    return <div>
        <Card
            {...editProps}
            history={history}
            fields={tab.editFields}
            toolbar={<CardActions onSave={handleSave} onRemove={handleRemove} />}
        />
    </div>;
};

CardTab.propTypes = {
    tab: PropTypes.object,
    tabIndex: PropTypes.number.isRequired
};

CardTab.defaultProps = {
    tab: {}
};


export default withRouter(CardTab);
