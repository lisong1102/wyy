import React, { memo } from 'react'
import HYThemeHeaderRCM from '@/component/theme-header-rcm';
import {HotRecommendWrapper} from './style'
const HotRecommendRanking = memo(() => {
  return (
    <HotRecommendWrapper>
        <HYThemeHeaderRCM title="榜单"></HYThemeHeaderRCM>
    </HotRecommendWrapper>
  )
})

export default HotRecommendRanking