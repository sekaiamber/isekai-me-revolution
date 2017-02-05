import React from 'react';
import { Provider, connect } from 'react-redux';
import _ from 'lodash';
import { actionCreator } from '../store';
import './../common/g.scss';

const messageActionCreator = actionCreator.message;

const honeypot = '__NOT_CHANGE__';

class Submit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
      email: '',
      presenter: '',
      honeypot,
      isContentError: false,
      isEmailError: false,
      isPresenterError: false,
    };
  }
  handleSubmit() {
    const data = {
      content: _.trim(this.state.content),
      email: _.trim(this.state.email),
      presenter: _.trim(this.state.presenter),
      isContentError: false,
      isEmailError: false,
      isPresenterError: false,
    };
    if (data.content === '') data.isContentError = true;
    if (data.presenter === '') data.isPresenterError = true;
    if (data.email === '' || !/^([\w-+=_])+(\.[\w-+=_]+)*@([\w-+=_])+((\.[\w-+=_]+)+)$/.test(data.email)) data.isEmailError = true;
    if (this.state.honeypot !== honeypot || this.honeypot.value !== '') {
      console.log('You are not human!');
      return;
    }

    this.setState({
      isContentError: data.isContentError,
      isEmailError: data.isEmailError,
      isPresenterError: data.isPresenterError,
    });
    if (!data.isContentError && !data.isEmailError && !data.isPresenterError) {
      this.props.dispatch(messageActionCreator.addMessage(data));
    }
  }
  render() {
    return (
      <div className="submit-area">
        <div className="inline row">
          <div className="col-md-6">
            <label htmlFor="presenter">称呼：</label>
            <input id="presenter" className={this.state.isPresenterError ? 'error' : ''} name="presenter" type="text" placeholder="你是谁？" onChange={e => this.setState({ presenter: e.currentTarget.value })} data-error-message="不能空！" />
          </div>
          <div className="col-md-6">
            <label htmlFor="email">邮箱：</label>
            <input id="email" className={this.state.isEmailError ? 'error' : ''} name="email" type="text" placeholder="关乎Gravatar头像" onChange={e => this.setState({ email: e.currentTarget.value })} data-error-message="认真点！" />
          </div>
          <div className="col-md-6 honeypot-container">
            <label htmlFor="honeypot">蜜罐：</label>
            <input ref={c => this.honeypot = c} id="honeypot" name="honeypot" type="text" placeholder="这是机器人蜜罐" onChange={e => this.setState({ honeypot: e.currentTarget.value })} />
          </div>
        </div>
        <div className="content-container">
          <label htmlFor="content">内容：</label>
          <textarea id="content" className={this.state.isContentError ? 'error' : ''} name="content" type="text" onChange={e => this.setState({ content: e.currentTarget.value })} />
        </div>
        <div className="button-container">
          <button onClick={this.handleSubmit.bind(this)}>Submit</button>
        </div>
      </div>
    );
  }
}

const ConnectedSubmit = connect(() => ({}))(Submit);

export default class StoreSubmit extends React.Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <ConnectedSubmit />
      </Provider>
    );
  }
}
