import React from 'react';
import gravatar from 'gravatar-api';
import marked from 'marked';
import './message.scss';

function dateString(time) {
  const date = new Date(time);
  return `${date.getMonth() + 1}月${date.getDate()}日`;
}

export default class Message extends React.Component {
  render() {
    return (
      <div className="message">
        <div className="gravatar">
          <img src={gravatar.imageUrl({ email: this.props.email })} alt="" />
        </div>
        <div className="content-container">
          <div className="presenter">{this.props.presenter}</div>
          <div className="content" dangerouslySetInnerHTML={{ __html: marked(this.props.content) }} />
          <div className="opts">
            {dateString(this.props.createAt)} OO [{this.props.oo}] XX [{this.props.xx}]
          </div>
        </div>
      </div>
    );
  }
}
