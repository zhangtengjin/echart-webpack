/*
* @Author: zhang
* @Date:   2018-12-08 15:29:16
* @Last Modified by:   zhang
* @Last Modified time: 2018-12-08 15:41:15
*/
import * as constants from './constants';

export function increment() {
    return {type: constants.INCREMENT}
}

export function decrement() {
    return {type: constants.DECREMENT}
}

export function reset() {
    return {type: constants.RESET}
}