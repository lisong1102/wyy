import React, { memo, useEffect } from 'react'
import HYThemeHeaderRCM from '@/component/theme-header-rcm';
import {HotRecommendWrapper} from './style'
import {getHotRecommendAction}  from '../../store/actionCreator'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { HOT_RECOMMEND_LIMIT } from '@/common/contants.js';
import HYSongsCover from '@/component/songs-cover';
const HotRcommend = memo(() => {
    //redux-hooks
    const dispatch = useDispatch()
    const {hotRecommends} = useSelector((state)=>({
        hotRecommends:state.getIn(['recommend','hotRecommends'],shallowEqual)
    }))
    //other hooks
    useEffect(()=>{
        dispatch(getHotRecommendAction(HOT_RECOMMEND_LIMIT))
    },[dispatch])
  return (
    <HotRecommendWrapper>
        <HYThemeHeaderRCM title="热门推荐" keywords={["华语", "流行", "民谣", "摇滚", "电子"]}></HYThemeHeaderRCM>
        <div className="recommend-list">
        {
          hotRecommends.map((item, index) => {
            return <HYSongsCover key={item.id} info={item}/>
          })
        }
      </div>
    </HotRecommendWrapper>
  )
})

export default HotRcommend