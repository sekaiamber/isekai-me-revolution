import React, { Component } from 'react';
import connect from '../utils/dispatch';
import { initState, reducers } from '../store';
import Mask from './components/mask';
import pages from './components/pages';

import './style.scss';

class Index extends Component {
  render() {
    const { activeMenu, maskTarget, activePage } = this.props;
    const Page = pages[activePage];
    return (
      <div>
        <Page
          dispatch={this.props.dispatch}
          activeMenu={activeMenu}
          activePage={activePage}
          onActive={this.handleMenuActive}
        />
        <Mask target={maskTarget} dispatch={this.props.dispatch} />
      </div>
    );
  }
}

export default connect(initState, reducers)(Index);
