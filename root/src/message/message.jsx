import React from 'react';
import gravatar from 'gravatar-api';
import marked from 'marked';
import { actionCreator } from '../store';
import './message.scss';

const ooxxMessageAction = actionCreator.message.ooxxMessage;

function dateString(time) {
  const date = new Date(time);
  return `${date.getMonth() + 1}月${date.getDate()}日`;
}

export default class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      voted: false,
    };
  }


  handleooxx(type) {
    if (!this.state.voted) {
      this.props.dispatch(ooxxMessageAction(this.props._key, type, () => {
        this.setState({
          voted: true,
        });
      }));
    }
  }

  render() {
    return (
      <div className="message">
        <div className="gravatar">
          <img src={gravatar.imageUrl({ email: this.props.email, parameters: { size: '160' } })} alt="" />
        </div>
        <div className="content-container">
          <div className="presenter">{this.props.presenter}</div>
          <div className="content" dangerouslySetInnerHTML={{ __html: marked(this.props.content) }} />
          <div className={this.state.voted ? 'opts voted' : 'opts'}>
            {dateString(this.props.createAt)} <span className="oo" onClick={this.handleooxx.bind(this, 'oo')}>OO</span> [{this.props.oo}] <span className="xx" onClick={this.handleooxx.bind(this, 'xx')}>XX</span> [{this.props.xx}]
          </div>
        </div>
      </div>
    );
  }
}
