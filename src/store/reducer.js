/*
* @Author: zhang
* @Date:   2018-12-08 15:42:10
* @Last Modified by:   zhang
* @Last Modified time: 2018-12-08 15:45:01
*/
import { combineReducers } from 'redux';
import { reducer as homeReducer } from 'pages/home/store';
const reducer = combineReducers({
    home: homeReducer,
})
export default reducer;