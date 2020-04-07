import { SET_ACTIVE_TAB } from '../types/types'

export default function (number) {
    return {
        type: SET_ACTIVE_TAB,
        payload: number
    }
}