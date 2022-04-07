import React, { memo, useEffect, useRef } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { BannerWrapper, BannerLeft, BannerRight, BannerControl } from './style'
import { getTopBannerAction } from '../../store/actionCreator'
import { Carousel } from 'antd';
const TopBanner = memo(() => {
    //useSelector接受一个参数为函数，函数的返回值，就是useSelector的返回值
    //shallowEqual用于浅层比较，是否数据发生改变，如果不加，redux-hooks默认会刷新造成性能损耗(不加是深层比较===，useSelector返回一个全新的对象，所以默认会改变)
    const { topBanners } = useSelector((state) => ({
        // topBanners: state.recommend.topBanners
        // topBanners: state.get('recommend').get('topBanners') //获取通过immutable处理过后map集合
        topBanners: state.getIn(['recommend', 'topBanners']) //链式获取
    }), shallowEqual)
    const dispatch = useDispatch()
    const bannerRef = useRef()
    useEffect(() => {
        dispatch(getTopBannerAction())
    }, [dispatch])
    return (
        <BannerWrapper>
            <div className='banner wrap-v2'>
                <BannerLeft>
                    <Carousel effect="fade" autoplay ref={bannerRef}>
                        {topBanners.map(item => {
                            return (<div className='banner-item' key={item.imageUrl}>
                                <img className="image" src={item.imageUrl} alt={item.typeTitle} />
                            </div>)
                        })}
                    </Carousel>
                </BannerLeft>
                <BannerRight>

                </BannerRight>
                <BannerControl>
                    <button className="btn left" onClick={e => bannerRef.current.prev()}></button>
                    <button className="btn right" onClick={e => bannerRef.current.next()}></button>
                </BannerControl>
            </div>
        </BannerWrapper>
    )
})

export default TopBanner