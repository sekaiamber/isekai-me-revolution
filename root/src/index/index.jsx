const React = require('react');

require('./g.scss')

import Page1 from './page1/page1'

export default class Index extends React.Component{
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container">
        <Page1 />
      </div>
    )
  }
}