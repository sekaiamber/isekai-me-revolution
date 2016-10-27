const React = require('react');

import Page from './../page'

require('./page2.scss')

const stuffs = require('./stuffs');

export default class Page2 extends React.Component{
  constructor(props) {
    super(props);
  }
  componentDidMount() {
  }
  componentWillUnmount(){
  }
  shouldComponentUpdate() {
    return false;
  }
  render() {
    return (
      <Page className="p2">
        <div>
          <h1><span>手艺</span><small><i>My Stuff</i></small></h1>
          <h5>
            <span>有些是<span className="i-serious i-small">十分严肃</span>的，有些<span className="i-not-serious i-small">纯属娱乐</span></span>
            <small><i>some <span className="i-serious i-small">serious</span>, others <span className="i-not-serious i-small">not so much</span></i></small>
          </h5>
          <p>
            {stuffs.map((stuff, i) => [
              <a key={i} href={stuff.link} className={stuff.className} title={stuff.description} target="_blank">{stuff.text}</a>,
              i == stuffs.length - 1 ? null : <span key={i + "_1"}>//</span>
            ])}
          </p>
        </div>
      </Page>
    );
  }
}