import {
    NEW_TAB
} from '../types/types';

const initialState = {
    tabs: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case NEW_TAB:
            return {
                ...state,
                tabs: [
                    ...state.tabs,
                    action.payload
                ]
            };
    default:
        return state;
    }
}
