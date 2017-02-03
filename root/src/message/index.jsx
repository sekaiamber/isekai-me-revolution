import React from 'react';
import { Provider, connect } from 'react-redux';
import Corner from './../common/corner';
import { actionCreator } from '../store';
import Submit from './submit';
import Message from './message';
import './../common/g.scss';
import './utils';

const messageActionCreator = actionCreator.message;

class Index extends React.Component {
  componentDidMount() {
    this.props.dispatch(messageActionCreator.initMessage());
  }
  handleMore() {
    this.props.dispatch(messageActionCreator.queryMessage(this.props.lastKey, 11));
  }
  render() {
    return (
      <div className="container">
        <Corner />
        <Submit store={this.props.store} />
        {this.props.messages.map(msg => (
          <Message {...msg} key={msg._key} />
        ))}
        <button onClick={this.handleMore.bind(this)}>More</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state.messages,
});

const ConnectedIndex = connect(mapStateToProps)(Index);

export default class StoreIndex extends React.Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <ConnectedIndex store={this.props.store} />
      </Provider>
    );
  }
}
