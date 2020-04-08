import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux'

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

import RightPanel from '../RightPanel/RightPanel'

import removeTabAction from '../../actions/removeTab';
import setActiveTab from '../../actions/setActiveTab';

import TabContent from '../TabContent/TabContent';

const useStyles = makeStyles({
    root: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column'
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
    },
    tabContentWithRightPanel: {
        display: 'flex',
        height: '100%'
    },
    tabContent: {
        flex: '1'
    }
});

let prevTabs = [];

const WorkSpace = () => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const tabs = useSelector(({ application }) => application.tabs);
    const activeTab = useSelector(({ application }) => application.activeTab);
    const handleChange = (event, newTab) => {
        dispatch(setActiveTab(newTab));
    };

    const handleTabDelete = tab => () => {
        dispatch(removeTabAction(tab))
    };

    useEffect(() => {
        if (tabs.length > prevTabs.length) {
            dispatch(setActiveTab(tabs.length - 1));
        } else if (tabs.length < prevTabs.length) {
            const newTab = activeTab === tabs.length ? tabs.length - 1 : activeTab;

            dispatch(setActiveTab(newTab));
        }

        prevTabs = tabs;
    }, [tabs]);
    const tab = tabs[activeTab] || {};
    const { data: dataObj } = useSelector(({ admin }) => (admin.resources[tab.data] || { data: {} }));
    const data = (dataObj || {})[tab.dataId] || {};

    return (
       <div className={classes.root}>
           <AppBar position='static' color='default'>
               <Tabs
                   value={activeTab}
                   onChange={handleChange}
                   variant='scrollable'
               >
                   {
                       tabs.map((tabInfo, i) => <div className={classes.tabWrapper} key={i}>
                           <Tab label={tabInfo.name} key={tabInfo.id} onClick={(event) => handleChange(event, i) } />
                           <IconButton aria-label='Delete' className={classes.tabRemoveButton} onClick={handleTabDelete(i)}>
                               <DeleteIcon/>
                           </IconButton>
                       </div>)
                   }
               </Tabs>
           </AppBar>
           <div className={classes.tabContentWithRightPanel}>
               <div className={classes.tabContent}>
                   <TabContent tab={tab} tabIndex={activeTab} />
               </div>
               {data.rightPanel && tab.rightPanel && <RightPanel data={data.rightPanel} tab={tab} />}
           </div>
       </div>
    )
};

export default WorkSpace;
