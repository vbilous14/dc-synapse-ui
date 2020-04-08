import React from 'react';
import PropTypes from 'prop-types';
import { MenuItemLink } from 'react-admin';

import AccountBoxIcon from '@material-ui/icons/AccountBox';
import SearchIcon from '@material-ui/icons/Search';
import ClearAllIcon from '@material-ui/icons/ClearAll';
import { makeStyles } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import grey from '@material-ui/core/colors/grey';

const useStyles = makeStyles({
    root: {
        backgroundColor: blue[50],
        paddingTop: '8px',
        height: '100%',
        borderRight: `2px solid ${grey[800]}`
    }
});

const Menu = (props) => {
    const { logout, dense } = props;
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <MenuItemLink
                to='/profile'
                primaryText='Profile'
                leftIcon={<AccountBoxIcon />}
                dense={dense}
            />
            <MenuItemLink
                to='/search'
                primaryText='Search'
                leftIcon={<SearchIcon />}
                dense={dense}
            />
            <MenuItemLink
                to='/operations'
                primaryText='Operations'
                leftIcon={<ClearAllIcon />}
                dense={dense}
            />
            {logout}
        </div>
    )
}

Menu.propTypes = {
    logout: PropTypes.func
};

Menu.defaultProps = {
    logout: () => {}
};

export default Menu;
