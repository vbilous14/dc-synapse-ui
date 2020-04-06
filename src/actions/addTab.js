import { NEW_TAB } from '../types/types'

export default function (tab) {
    return {
        type: NEW_TAB,
        payload: {
            ...tab,
            id: Date.now()
        }
    }
}