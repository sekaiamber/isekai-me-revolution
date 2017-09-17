import React, { Component } from 'react';
import autobind from 'autobind-decorator';
import subpage from '../subpage';

class Stuff extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test: '',
      touchStart: false,
    };
  }
  @autobind
  handleWheel(e) {
    this.setState({
      test: e.deltaY,
    });
    // console.log(e.deltaY);
  }
  @autobind
  handleTouchStart() {
    this.setState({ touchStart: true });
  }
  @autobind
  handleTouchMove(e) {
    console.log(e);
  }
  @autobind
  handleTouchEnd() {
    this.setState({ touchStart: true });
  }
  render() {
    return (
      <div
        className="page"
        id="stuff"
        onWheel={this.handleWheel}
        onTouchStart={this.handleTouchStart}
        onTouchMove={this.handleTouchMove}
        onTouchEnd={this.handleTouchEnd}
      >
        {this.state.test}
      </div>
    );
  }
}

export default subpage(Stuff);
