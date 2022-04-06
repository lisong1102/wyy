import React, { memo } from 'react'
import { HashRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux';
import store from './store'

import routes from './router';
import AppFooter from '@/component/app-footer/index'
import AppHeader from '@/component/app-header/index'
export default memo(function App() {
    return (
        <Provider store={store}>
            <HashRouter>
                <AppHeader />
                {renderRoutes(routes)}
                <AppFooter />
            </HashRouter>
        </Provider>

    )
})
