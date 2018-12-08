/*
* @Author: zhang
* @Date:   2018-12-08 11:48:37
* @Last Modified by:   zhang
* @Last Modified time: 2018-12-08 16:00:19
*/
import React, { Component } from 'react';
import ReactDom from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import {Provider} from 'react-redux';
import store from './store';
import getRouter from 'router/router.js';
// 模块更新时通知index.js

renderWithHotReload(getRouter());
if (module.hot) {
    module.hot.accept('./router/router', () => {
        const getRouter = require('./router/router').default;
        renderWithHotReload(getRouter());
    });
}
function renderWithHotReload(RootElement) {
    ReactDom.render(
        <AppContainer>
            <Provider store={store}>
                {RootElement}
            </Provider>
        </AppContainer>,
        document.getElementById('root')
    )
}