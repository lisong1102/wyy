import React, { memo, useEffect } from 'react'
import { connect } from 'react-redux'
import { getTopBannerAction } from './store/actionCreator'

function HYRecommend(props) {
    const { topBanners } = props
    useEffect(() => {
        console.log(topBanners, 'sssssssssss')
    }, [topBanners])
    return (
        <div>recommend</div>
    )
}
const mapStateToProps = (state) => ({
    topBanners: state.recommend.topBanners
})


const mapDispatchToProps = (dispatch) => ({
    getBanners: () => {
        dispatch(getTopBannerAction())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(memo(HYRecommend))