const React = require('react');

require('./../common/g.scss')

import Corner from './../common/corner'

export default class Index extends React.Component{
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container">
        <Corner />
      </div>
    )
  }
}