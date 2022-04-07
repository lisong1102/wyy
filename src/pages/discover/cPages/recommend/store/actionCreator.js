import * as actionTypes from './constants'
import { getTopBanners } from '@/services/recommend'
//请求数据banner action
const  changeTopBannerAction = (res)=>({
    type:actionTypes.CHANGE_TOP_BANNERS,
    topBanners:res.banners
})
export const getTopBannerAction = () => {
    return dispatch => {
        getTopBanners().then(res => {
            dispatch(changeTopBannerAction(res))
        })
    }
}