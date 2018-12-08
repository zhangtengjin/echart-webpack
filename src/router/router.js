/*
* @Author: zhang
* @Date:   2018-12-08 14:28:50
* @Last Modified by:   zhang
* @Last Modified time: 2018-12-08 15:05:51
*/
import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Home from 'pages/Home/Home';
import Page1 from 'pages/Page1/Page1';
const getRouter = () => (
    <Router>
        <div>
            <ul>
                <li><Link to="/">首页</Link></li>
                <li><Link to="/page1">Page1</Link></li>
            </ul>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/page1" component={Page1}/>
            </Switch>
        </div>
    </Router>
);

export default getRouter;