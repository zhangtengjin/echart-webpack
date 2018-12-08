/*
* @Author: zhang
* @Date:   2018-12-08 15:42:01
* @Last Modified by:   zhang
* @Last Modified time: 2018-12-08 16:20:53
*/
import {createStore} from 'redux';
import combineReducers from './reducer.js';

let store = createStore(combineReducers);

export default store;