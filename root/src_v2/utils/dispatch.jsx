/**
* 简单的Dispatch
* 作者：xiyan
* 用法：
* 在Component的constructor里使用getDispatch(this, { ...initState }, { ...reducers })
* 在render中可以使用  { ... } = this.state获得state
* 子组件中传入dispatch即可
*
* reducer示例：
*/
// {
//   sync1({ payload }, { dispatch, setState }) {
//     dispatch({
//       type: 'other-type'
//     })

//     setState({
//       ...states
//     });
//   }
//   * async() {
//     const data = yield getSomePromise();
//     setState({
//       data
//     });
//   }
// }

import React, { Component } from 'react';

function async(makeGenerator) {
  return (...args) => {
    const generator = makeGenerator.apply(this, args);

    if (generator && generator.next) {
      const handle = (result) => { // { done: [Boolean], value: [Object] }
        if (result.done) return result.value;

        return result.value.then(
          res => handle(generator.next(res)),
          err => handle(generator.throw(err))
        );
      };

      return handle(generator.next());
    }
    return generator;
  };
}

function dispatch(reducers, opts) {
  const _opts = {
    payload: {},
    onSuccess() {},
    onFail() {},
    ...opts,
  };
  if (!_opts.type) {
    throw new Error('type is required in Dispatch.');
  }
  if (!reducers[_opts.type]) {
    console.warn(`Unknown type '${_opts.type}' in Dispatch.`);
    return;
  }
  async(reducers[_opts.type])(_opts, {
    dispatch: dispatch.bind(this, reducers),
    setState: this.setState.bind(this),
    getState: cb => cb(this.state),
    thisArg: this,
  });
}
/* eslint no-param-reassign: 0 */
function getDispatch(thisArg, initState, reducers) {
  let state = {
    ...initState,
  };
  if (thisArg.state) {
    state = {
      ...state,
      ...thisArg.state,
    };
  }
  thisArg.state = state;
  return dispatch.bind(thisArg, reducers);
}

export default function connect(initState = {}, reducers = {}) {
  return function WrappedComponent(C) {
    return class extends Component {
      constructor() {
        super();
        // 设置store
        this.dispatch = getDispatch(this, initState, reducers);
      }
      render() {
        return <C {...this.props} dispatch={this.dispatch} {...this.state} />;
      }
    };
  };
}
