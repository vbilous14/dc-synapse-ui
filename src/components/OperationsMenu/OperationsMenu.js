import React from 'react';
import { MenuItemLink } from 'react-admin';

import PersonIcon from '@material-ui/icons/Person';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import FeedbackIcon from '@material-ui/icons/Feedback';
import { makeStyles } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import grey from '@material-ui/core/colors/grey';

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
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <MenuItemLink
                to='/operations/members'
                primaryText='Members'
                leftIcon={<PersonIcon />}
            />
            <MenuItemLink
                to='/operations/companies'
                primaryText='Companies'
                leftIcon={<BusinessCenterIcon />}
            />
            <MenuItemLink
                to='/operations/claims'
                primaryText='Claims'
                leftIcon={<FeedbackIcon />}
            />
        </div>
    )
}

export default OperationsMenu;
