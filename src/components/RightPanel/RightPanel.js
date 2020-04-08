import React from 'react';
import PropTypes from 'prop-types';

import { SimpleForm } from 'react-admin';

import blue from '@material-ui/core/colors/blue';
import grey from '@material-ui/core/colors/grey';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        boxSizing: 'border-box',
        backgroundColor: blue[50],
        paddingTop: '8px',
        width: '200px',
        borderLeft: `2px solid ${grey[800]}`
    },
    title: {
        width: 'auto'
    }
});

const RightPanel = ({ data, tab }) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <SimpleForm record={data} toolbar={<div />}>
                <Typography variant='h6' className={classes.title}>{tab.rightPanel.title}</Typography>
                {tab.rightPanel.fields.map((field, i) => <field.component key={i} source={field.source} />)}
            </SimpleForm>
        </div>
    )
};

RightPanel.propTypes = {
    data: PropTypes.object.isRequired,
    tab: PropTypes.object.isRequired
};

export default RightPanel;
