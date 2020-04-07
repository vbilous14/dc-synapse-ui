import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { MenuItemLink, ListItemIcon } from 'react-admin';

import { makeStyles } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import grey from '@material-ui/core/colors/grey';

import addTabAction from '../../actions/addTab';

import { OPERATIONS } from '../../constants/constants'
import findIndex from "../../utils/findIndex";
import setActiveTab from "../../actions/setActiveTab";

const useStyles = makeStyles({
    root: {
        boxSizing: 'border-box',
        backgroundColor: blue[50],
        paddingTop: '8px',
        height: '100%',
        width: '200px',
        borderRight: `2px solid ${grey[800]}`
    },
    item: {
        padding: '6px 16px',
        display: 'flex',
        alignItems: 'center',
        width: 'auto',
        fontSize: '1rem',
        boxSizing: 'borderBox',
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontWeight: '400',
        lineHeight: '1.5',
        whiteSpace: 'nowrap',
        letterSpacing: '0.00938em',
        cursor: 'pointer'
    },
    itemSvgWrapper: {
        minWidth: '40px',
        display: 'flex',
        alignItems: 'center'
    },
    itemSvg: {
        color: 'rgba(0, 0, 0, 0.54)'
    }
});

const OperationsMenu = () => {
    const dispatch = useDispatch();
    const tabs = useSelector(({ application }) => application.tabs);
    const classes = useStyles();
    const handleClick = tab => event => {
        const tabId = tab.data;
        const newActiveTabIndex = findIndex((tab => tab.id === tabId), tabs);

        if (newActiveTabIndex > -1) {
            dispatch(setActiveTab(newActiveTabIndex));
            return;
        }

        dispatch(addTabAction({
            ...tab,
            id: tabId
        }))
    };

    return (
        <div className={classes.root}>
            {
                OPERATIONS.map((operation, i) => <div
                    className={classes.item}
                    key={i}
                    onClick={handleClick(operation)}
                >
                    <div className={classes.itemSvgWrapper}>
                        <operation.icon className={classes.itemSvg} />
                    </div>
                    {operation.name}
                </div>)
            }
        </div>
    )
};

export default OperationsMenu;
