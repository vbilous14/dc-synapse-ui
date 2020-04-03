import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { DashboardMenuItem } from 'react-admin';

import { MenuItem, Typography, ListItemIcon, withStyles } from '@material-ui/core';
import MenuItemIcon from '@material-ui/icons/Book';

import SubMenu from "./SubMenu";

const materialStyles = theme => ({
    icon: {
        minWidth: theme.spacing(5)
    }
});

class Menu extends Component {
    static propTypes = {
        sidebarIsOpen: PropTypes.bool.isRequired,
        resources: PropTypes.object.isRequired,
        logout: PropTypes.func,
        onMenuClick: PropTypes.func
    };

    static defaultProps = {
        logout: () => {},
        onMenuClick: () => {}
    };

    render() {
        const { logout, sidebarIsOpen, onMenuClick, classes } = this.props;

        console.log('this.props', this.props);

        return (
            <div className={classes.border}>
                <DashboardMenuItem onClick={onMenuClick} sidebarIsOpen={sidebarIsOpen} />
                <MenuItem value="">
                    <ListItemIcon classes={{ root: classes.icon }}>
                        <MenuItemIcon />
                    </ListItemIcon>
                    <Typography variant="inherit">Menu Item 1</Typography>
                </MenuItem>
                <MenuItem value="">
                    <ListItemIcon classes={{ root: classes.icon }}>
                        <MenuItemIcon />
                    </ListItemIcon>
                    <Typography variant="inherit">Menu Item 2</Typography>
                </MenuItem>
                <MenuItem value="">
                    <ListItemIcon classes={{ root: classes.icon }}>
                        <MenuItemIcon />
                    </ListItemIcon>
                    <Typography variant="inherit">Menu Item 3</Typography>
                </MenuItem>
                <SubMenu onClick={onMenuClick} sidebarIsOpen={sidebarIsOpen} />
                {logout}
            </div>
        )
    };
}

const mapStateToProps = ({ admin }) => ({
    sidebarIsOpen: admin.ui.sidebarOpen,
    resources: admin.resources
});

export default connect(mapStateToProps)(withStyles(materialStyles)(Menu));
