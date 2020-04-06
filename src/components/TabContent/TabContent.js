import React from 'react';
import PropTypes from 'prop-types';

import ListTab from '../ListTab/ListTab';

const TabContent = ({ tab }) => {
    if (tab.type === 'list') {
        return <ListTab tab={tab} />
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
