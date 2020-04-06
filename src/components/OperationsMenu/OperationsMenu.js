import React from 'react';
import { MenuItemLink } from 'react-admin';
import { useDispatch } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import grey from '@material-ui/core/colors/grey';

import addTabAction from '../../actions/addTab';

import { OPERATIONS } from '../../constants/constants'

const useStyles = makeStyles({
    root: {
        backgroundColor: blue[50],
        paddingTop: '8px',
        height: '100%',
        width: '200px',
        borderRight: `2px solid ${grey[800]}`
    }
});

const OperationsMenu = () => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const handleClick = (tab) => () => {
        dispatch(addTabAction({
            ...tab,
            type: 'list'
        }))
    };

    return (
        <div className={classes.root}>
            {
                OPERATIONS.map((operation, i) => <MenuItemLink
                    key={i}
                    to={operation.url}
                    primaryText={operation.name}
                    onClick={handleClick(operation)}
                    leftIcon={<operation.icon />}
                />)
            }
        </div>
    )
};

export default OperationsMenu;
