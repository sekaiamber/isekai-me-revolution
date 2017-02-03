import React from 'react';
import './../common/g.scss';
import './index.scss';
import Corner from './../common/corner';
import P1 from './p1';
import P2 from './p2';
import P3 from './p3';
import P4 from './p4';

export default class Index extends React.Component {
  render() {
    return (
      <div style={{ height: '100%' }} >
        <Corner />
        <div className="screen" style={{ height: '100%' }}>
          <P1 />
          <div className="version">Ver.20170203</div>
        </div>
        <div className="screen">
          <P2 />
        </div>
        <div className="screen">
          <P3 />
        </div>
        <div className="screen">
          <P4 />
        </div>
      </div>
    );
  }
}
