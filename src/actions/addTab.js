import { ADD_TAB } from '../types/types'

export default function (tab) {
    return {
        type: ADD_TAB,
        payload: tab
    }
}