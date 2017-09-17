import React from 'react';
import classnames from 'classnames';
import subpage from '../subpage';
import stuffs from '../../../../../assets/data/stuffs.json';

import './style.scss';

function Stuff() {
  return (
    <div id="stuff">
      <h1>Stuff</h1>
      {stuffs.map((stuff, i) => (
        <div className="stuff-item" key={i}>
          <div className={classnames('text', 'i0x0' + (i % 4))}><a href={stuff.link}>{stuff.text.toLowerCase()}</a></div>
          <div className="description">{stuff.description}</div>
        </div>
      ))}
    </div>
  );
}

export default subpage(Stuff);
