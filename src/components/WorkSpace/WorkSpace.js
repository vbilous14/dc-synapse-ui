import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

import removeTabAction from '../../actions/removeTab';

import TabContent from '../TabContent/TabContent';

const useStyles = makeStyles({
    root: {
        width: '100%'
    },
    tabWrapper: {
        minHeight: '100%',
        display: 'flex',
        '&:hover $tabRemoveButton': {
            opacity: '1'
        }
    },
    tabRemoveButton: {
        transition: 'opacity 0.2s',
        opacity: '0',
        marginLeft: '-35px',
        alignSelf: 'center'
    }
});

let prevTabs = [];

const WorkSpace = () => {
    const dispatch = useDispatch();
    const [tab, setTab] = useState(0);
    const classes = useStyles();
    const tabs = useSelector(({ application }) => application.tabs);
    const handleChange = (event, newTab) => {
        setTab(newTab);
    };

    const handleTabDelete = tab => () => {
        dispatch(removeTabAction(tab))
    };

    useEffect(() => {
        if (tabs.length > prevTabs.length) {
            setTab(tabs.length - 1);

            prevTabs = tabs;
        } else if (tabs.length < prevTabs.length) {
            const newTab = tab >= tabs.length - 1 ? tabs.length - 1 : tab + 1;

            setTab(newTab);
        }
    }, [tabs]);

    return (
       <div className={classes.root}>
           <AppBar position='static' color='default'>
               <Tabs
                   value={tab}
                   onChange={handleChange}
                   variant='scrollable'
               >
                   {
                       tabs.map((tabInfo, i) => <div className={classes.tabWrapper}>
                           <Tab label={tabInfo.name} key={tabInfo.id} onClick={(event) => handleChange(event, i) } />
                           <IconButton aria-label='Delete' className={classes.tabRemoveButton} onClick={handleTabDelete(i)}>
                               <DeleteIcon/>
                           </IconButton>
                       </div>)
                   }
               </Tabs>
           </AppBar>
           <TabContent tab={tabs[tab]}/>
       </div>
    )
};

export default WorkSpace;
