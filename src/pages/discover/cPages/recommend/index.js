import React, { memo } from 'react'
import HYTopBanner from './c-pns/top-banner'
import {
    RecommendWrapper,
    Content,
    RecommendLeft,
    RecommendRight
} from './style';
import HotRcommend from './c-pns/hot-recommend';
import HotNewAlbum from './c-pns/new-album';
import HotRecommendRanking from './c-pns/recommend-ranking';
// --------------------------redux-hooks操作
function HYRecommend(props) {
    //useSelector接受一个参数为函数，函数的返回值，就是useSelector的返回值
    //shallowEqual用于浅层比较，是否数据发生改变，如果不加，redux-hooks默认会刷新造成性能损耗(不加是深层比较===，useSelector返回一个全新的对象，所以默认会改变)
    // const { topBanners } = useSelector((state) => ({
    //     // topBanners: state.recommend.topBanners
    //     // topBanners: state.get('recommend').get('topBanners') //获取通过immutable处理过后map集合
    //     topBanners: state.getIn(['recommend', 'topBanners']) //链式获取
    // }), shallowEqual)
    // const dispatch = useDispatch()
    // useEffect(() => {
    //     dispatch(getTopBannerAction())
    // }, [dispatch])
    return (
        <RecommendWrapper>
            <HYTopBanner></HYTopBanner>
            <Content className='wrap-v2'>
                <RecommendLeft>
                    <HotRcommend></HotRcommend>
                    <HotNewAlbum></HotNewAlbum>
                    <HotRecommendRanking></HotRecommendRanking>
                </RecommendLeft>
                <RecommendRight></RecommendRight>
            </Content>
        </RecommendWrapper>
    )
}
export default memo(HYRecommend)

//-----------------------------------connect方法
// const mapStateToProps = (state) => ({
//     topBanners: state.recommend.topBanners
// })


// const mapDispatchToProps = (dispatch) => ({
//     getBanners: () => {
//         dispatch(getTopBannerAction())
//     }
// })

// export default connect(mapStateToProps, mapDispatchToProps)(memo(HYRecommend))