import React from 'react';
import './message.scss';

export default class Message extends React.Component {
  render() {
    return (
      <div className="message">
        <label htmlFor="presenter">presenter</label>
        <div>{this.props.presenter}</div>
        <label htmlFor="email">email</label>
        <div>{this.props.email}</div>
        <label htmlFor="content">content</label>
        <div>{this.props.content}</div>
      </div>
    );
  }
}
