import * as actionTypes from './constants'
const defaultState = {
    topBanners: []
}
function reducer(state = defaultState, action) {
    switch (action.type) {
        case actionTypes.CHANGE_BANNERS:
            return { ...state, topBanners: [] }
        default:
            return state;
    }
}

export default reducer