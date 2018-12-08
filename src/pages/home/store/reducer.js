/*
* @Author: zhang
* @Date:   2018-12-08 15:29:37
* @Last Modified by:   zhang
* @Last Modified time: 2018-12-08 16:19:18
*/
import * as constants from './constants';

const initState = {
    count: 0
};
export default function reducer(state = initState, action) {
    switch (action.type) {
        case constants.INCREMENT:
            return {
                count: state.count + 1
            };
        case constants.DECREMENT:
            return {
                count: state.count - 1
            };
        case constants.RESET:
            return {count: 0};
        default:
            return state
    }
}