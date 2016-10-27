const React = require('react');

require('./g.scss')

import Page1 from './page1/page1'
import Page2 from './page2/page2'

export default class Index extends React.Component{
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container">
        <Page1 />
        <Page2 />
      </div>
    )
  }
}