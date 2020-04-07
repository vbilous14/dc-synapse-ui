import React from 'react';
import PropTypes from 'prop-types';

import ListTab from '../ListTab/ListTab';
import CardTab from '../CardTab/CardTab';
import StepsTab from '../StepsTab/StepsTab';

const TabContent = ({ tab, tabIndex }) => {
    if (tab.type === 'list') {
        return <ListTab tab={tab} tabIndex={tabIndex} />
    }

    if (tab.type === 'card') {
        return <CardTab tab={tab} tabIndex={tabIndex} />
    }

    if (tab.type === 'steps') {
        return <StepsTab tab={tab} tabIndex={tabIndex} />
    }

    return (
        <div />
    )
};

TabContent.propTypes = {
    tab: PropTypes.object,
    tabIndex: PropTypes.number.isRequired
};

TabContent.defaultProps = {
    tab: {}
};

export default TabContent;
