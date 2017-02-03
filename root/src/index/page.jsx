const React = require('react');

export default class Page extends React.Component {
  componentDidMount() {
  }
  componentWillUnmount() {
  }
  render() {
    return (
      <div className={'page ' + this.props.className}>
        {this.props.children}
      </div>
    );
  }
}
