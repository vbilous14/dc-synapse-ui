import {
    put,
    takeEvery,
} from 'redux-saga/effects'

import {
    SET_SIDEBAR_VISIBILITY,
    setSidebarVisibility,
} from 'react-admin'

function* closeSidebar(action) {
    try {
        if (action.payload) {
            yield put(setSidebarVisibility(false))
        }
    } catch (error) {
        console.log('closeSidebar:', error)
    }
}

function* closeSidebarSaga() {
    yield takeEvery(SET_SIDEBAR_VISIBILITY, closeSidebar)
}

export default [closeSidebarSaga]