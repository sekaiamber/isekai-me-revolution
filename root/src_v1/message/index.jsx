import React from 'react';
import { Provider, connect } from 'react-redux';
import Corner from './../common/corner';
import { actionCreator } from '../store';
import Submit from './submit';
import Message from './message';
import './../common/g.scss';
import './utils';
import './index.scss';

const messageActionCreator = actionCreator.message;

class Index extends React.Component {
  componentDidMount() {
    this.props.dispatch(messageActionCreator.initMessages());
  }
  handleMore() {
    this.props.dispatch(messageActionCreator.queryMessages(this.props.lastKey, 11));
  }
  render() {
    return (
      <div className="container">
        <Corner />
        <h1>Sekai的留言板</h1>
        <ul>
          <li>请留下你想说的，可以是段子，可以发小黄图，也可以提意见。</li>
          <li>图片之类的，支持<a href="https://guides.github.com/features/mastering-markdown/">Markdown(GFM)</a>语法。</li>
          <li>本区域内容为<b>实时更新</b>，也是为实时技术做的一次尝试。</li>
        </ul>
        <Submit store={this.props.store} />
        {this.props.messages.map(msg => (
          <Message {...msg} key={msg._key} dispatch={this.props.dispatch} />
        ))}
        <div className="more" onClick={this.handleMore.bind(this)}>More</div>
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
