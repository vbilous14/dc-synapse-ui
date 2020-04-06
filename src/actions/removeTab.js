import { REMOVE_TAB } from '../types/types'

export default function (number) {
    return {
        type: REMOVE_TAB,
        payload: number
    }
}