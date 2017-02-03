import Page1 from './page1';
import Page2 from './page2';
import Page3 from './page3';
import Page4 from './page4';
import Corner from './../common/corner';

const React = require('react');
require('./../common/g.scss');

export default class Index extends React.Component {
  render() {
    return (
      <div className="container">
        <Corner />
        <Page1 />
        <Page2 />
        <Page3 />
        <Page4 />
      </div>
    );
  }
}
