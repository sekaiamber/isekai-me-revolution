import React from 'react';
import { Provider, connect } from 'react-redux';
import { actionCreator } from '../store';
import './../common/g.scss';

const messageActionCreator = actionCreator.message;

class Submit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
      email: '',
      presenter: '',
    };
  }
  handleSubmit() {
    this.props.dispatch(messageActionCreator.addMessage(this.state));
  }
  render() {
    return (
      <div className="submit">
        <label htmlFor="presenter">presenter</label>
        <input name="presenter" type="text" onChange={e => this.setState({ presenter: e.currentTarget.value })} />
        <label htmlFor="email">email</label>
        <input name="email" type="text" onChange={e => this.setState({ email: e.currentTarget.value })} />
        <label htmlFor="content">content</label>
        <textarea name="content" type="text" onChange={e => this.setState({ content: e.currentTarget.value })} />
        <button onClick={this.handleSubmit.bind(this)}>Submit</button>
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
