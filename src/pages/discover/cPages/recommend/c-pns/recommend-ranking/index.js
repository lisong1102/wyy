import React, { memo, useEffect } from 'react'
import HYThemeHeaderRCM from '@/component/theme-header-rcm';
import {RankingWrapper} from './style'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import {getTopListAction} from '../../store/actionCreator'
import HYTopRanking from '@/component/top-ranking';
const HotRecommendRanking = memo(() => {
    const dispatch = useDispatch()
    const {upRanking,newRanking,originRanking} = useSelector(state=>({
        upRanking: state.getIn(["recommend", "upRanking"]),
        newRanking: state.getIn(["recommend", "newRanking"]),
        originRanking: state.getIn(["recommend", "originRanking"]),
    }),shallowEqual)
    useEffect(()=>{
        dispatch(getTopListAction(0))
        dispatch(getTopListAction(2))
        dispatch(getTopListAction(3))
    },[dispatch])
  return (
    <RankingWrapper>
        <HYThemeHeaderRCM title="榜单"></HYThemeHeaderRCM>
        <div className="tops">
        <HYTopRanking info={upRanking}/>
        <HYTopRanking info={newRanking}/>
        <HYTopRanking info={originRanking}/>
      </div>
    </RankingWrapper>
  )
})

export default HotRecommendRanking