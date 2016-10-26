const React = require('react');

import Page from './../page'
import Sekai from './sekai'

require('./page1.scss')

export default class Page1 extends React.Component{
  constructor(props) {
    super(props);
  }
  componentDidMount() {
  }
  componentWillUnmount(){
  }
  render() {
    return (
      <Page className="p1">
        <Sekai />
      </Page>
    );
  }
}