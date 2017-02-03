import Corner from './../common/corner';

const React = require('react');
require('./../common/g.scss');

export default class Index extends React.Component {
  render() {
    return (
      <div className="container">
        <Corner />
        <input type="password" pattern="[0-9]*" inputMode="numeric" />
      </div>
    );
  }
}
