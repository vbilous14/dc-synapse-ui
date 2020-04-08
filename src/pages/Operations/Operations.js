import React from 'react';

import OperationsMenu from '../../components/OperationsMenu/OperationsMenu';
import WorkSpace from '../../components/WorkSpace/WorkSpace';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        height: '100%',
        display: 'flex'
    }
});

const Operations = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <OperationsMenu />
            <WorkSpace />
        </div>
    )
};

export default Operations;
