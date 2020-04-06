import {
    ADD_TAB,
    REMOVE_TAB
} from '../types/types';

const initialState = {
    tabs: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_TAB:
            return {
                ...state,
                tabs: [
                    ...state.tabs,
                    action.payload
                ]
            };
        case REMOVE_TAB:
            const newTabs = [...state.tabs];

            newTabs.splice(action.payload, 1);

            return {
                ...state,
                tabs: newTabs
            };
    default:
        return state;
    }
}
