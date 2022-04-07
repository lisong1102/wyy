
// import { combineReducers } from 'redux'    不做immutable优化
import { combineReducers } from 'redux-immutable' //immutable提供了用于处理多个reducer的包，最后返回一个处理过后的多个reducer
import { reducer as recommendReducer } from '../pages/discover/cPages/recommend/store'

const cReducer = combineReducers({
    recommend: recommendReducer
})
export default cReducer