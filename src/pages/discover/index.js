import React, { memo } from 'react'
import { DiscoverWrapper, TopMenu } from './style'
import { dicoverMenu } from '@/common/local-data'
import { NavLink } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
export default memo(function HYDiscover(props) {
    const { route } = props;
    return (
        <DiscoverWrapper>
            <div className='top'>
                <TopMenu>
                    {
                        dicoverMenu.map((item, index) => {
                            return (
                                <div className='item'>
                                    <NavLink to={item.link}>{item.title}</NavLink>
                                </div>
                            )
                        })
                    }
                </TopMenu>
            </div>
            {renderRoutes(route.routes)}
        </DiscoverWrapper>
    )
})
