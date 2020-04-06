import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import TabContent from '../TabContent/TabContent';

const useStyles = makeStyles({
    root: {
        width: '100%'
    }
});

const WorkSpace = () => {
    const [tab, setTab] = useState(0);
    const classes = useStyles();
    const tabs = useSelector(({ application }) => application.tabs);
    const handleChange = (event, newTab) => {
        setTab(newTab);
    };

    return (
       <div className={classes.root}>
           <AppBar position="static" color="default">
               <Tabs
                   value={tab}
                   onChange={handleChange}
                   variant="scrollable"
               >
                   {
                       tabs.map(tab => <Tab label={tab.name} key={tab.id} />)
                   }
               </Tabs>
               <TabContent tab={tabs[tab]}/>
           </AppBar>
       </div>
    )
};

export default WorkSpace;
