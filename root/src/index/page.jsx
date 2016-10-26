const React = require('react');

export default class Page extends React.Component{
  constructor(props) {
    super(props);
  }
  componentDidMount() {
  }
  componentWillUnmount(){
  }
  render() {
    return (
      <div className={"page " + this.props.className}>
        {this.props.children}
      </div>
    );
  }
}