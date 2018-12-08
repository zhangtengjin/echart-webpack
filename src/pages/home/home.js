/*
* @Author: zhang
* @Date:   2018-12-08 14:30:05
* @Last Modified by:   zhang
* @Last Modified time: 2018-12-08 16:24:10
*/

import React, {Component} from 'react';
import { actionCreators } from './store';
import {connect} from 'react-redux';
class Home extends Component {
    render() {
        return (
            <div>
                <div>当前计数为{this.props.counter}</div>
                <button onClick={() => this.props.increment()}>自增
                </button>
                <button onClick={() => this.props.decrement()}>自减
                </button>
                <button onClick={() => this.props.reset()}>重置
                </button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        counter: state.home.count
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => {
            dispatch(actionCreators.increment())
        },
        decrement: () => {
            dispatch(actionCreators.decrement())
        },
        reset: () => {
            dispatch(actionCreators.reset())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);