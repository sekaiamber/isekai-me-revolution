import React from 'react';
import $ from 'jquery';
import './menu.scss';

export default class Menu extends React.Component {
  handleMenuItemClick(id) {
    const $main = $('#main');
    const maino = $main.offset();
    const targeto = $('#' + id).offset();
    const mains = $main.scrollTop();
    $main.animate({ scrollTop: (targeto.top - maino.top) + mains });
    document.body.className = '';
  }

  render() {
    return (
      <div id="menu">
        <div className="menu-top">
          <div className="name">
            <img src="http://www.gravatar.com/avatar/a8f80408efe63cbee5b000fda9f70efe?size=84" alt="sekai" />
            <span>XU XIAOMENG(@Sekai)</span>
          </div>
          <div className="links">
            <a href="mailto:a3824036@126.com" target="_blank" rel="noopener noreferrer">
              <span className="iconfont icon-email" />
            </a>
            <a href="https://github.com/sekaiamber" target="_blank" rel="noopener noreferrer">
              <span className="iconfont icon-github" />
            </a>
          </div>
        </div>
        <div className="menu-items">
          <div className="menu-item" onClick={this.handleMenuItemClick.bind(this, 'p1')}>首屏<span>Home</span></div>
          <div className="menu-item" onClick={this.handleMenuItemClick.bind(this, 'p2')}>手艺<span>My Stuff</span></div>
          <div className="menu-item" onClick={this.handleMenuItemClick.bind(this, 'p3')}>关于我<span>About Me</span></div>
          <div className="menu-item" onClick={this.handleMenuItemClick.bind(this, 'p4')}>联系我<span>Get ahold of me</span></div>
          <div className="menu-item" onClick={() => window.location = '/message'}>留言板<span>Message Borad</span></div>
        </div>
      </div>
    );
  }
}

export class MenuBt extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  handleClick() {
    this.setState({
      show: !(document.body.className === 'show-menu'),
    }, () => {
      document.body.className = this.state.show ? 'show-menu' : '';
    });
  }

  render() {
    return (
      <div>
        <div id="menuBt" onClick={this.handleClick.bind(this)} >
          <span className="iconfont icon-menu" />
        </div>
        <div id="menuMask" onClick={this.handleClick.bind(this)} />
      </div>
    );
  }
}
