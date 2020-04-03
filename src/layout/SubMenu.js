import React, {Fragment} from 'react';
import {MenuItemLink} from 'react-admin';

import MenuSubItemIcon from '@material-ui/icons/Group';

const SubMenu = React.forwardRef(({onClick, sidebarIsOpen}, ref) => (
    <Fragment>
        <MenuItemLink
            ref={ref}
            to="/users"
            primaryText="Menu Sub Item 1 (users)"
            leftIcon={<MenuSubItemIcon/>}
            onClick={onClick}
            sidebarIsOpen={sidebarIsOpen}
        />
        <MenuItemLink
            ref={ref}
            to="/posts"
            primaryText="Menu Sub Item 2 (posts)"
            leftIcon={<MenuSubItemIcon/>}
            onClick={onClick}
            sidebarIsOpen={sidebarIsOpen}
        />
        <MenuItemLink
            ref={ref}
            to="/subItem3"
            primaryText="Menu Sub Item 3"
            leftIcon={<MenuSubItemIcon/>}
            onClick={onClick}
            sidebarIsOpen={sidebarIsOpen}
        />
    </Fragment>
));

export default SubMenu;
