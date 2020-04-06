import React from 'react';
import PropTypes from 'prop-types';

import ListTab from '../ListTab/ListTab';
import CardTab from '../CardTab/CardTab';

const TabContent = ({ tab }) => {
    if (tab.type === 'list') {
        return <ListTab tab={tab} />
    }

    if (tab.type === 'card') {
        return <CardTab tab={tab} />
    }

    return (
        <div />
    )
};

TabContent.propTypes = {
    tab: PropTypes.object
};

TabContent.defaultProps = {
    tab: {}
};

export default TabContent;
