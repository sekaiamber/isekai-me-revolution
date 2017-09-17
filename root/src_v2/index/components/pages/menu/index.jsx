import React from 'react';
import Item from './item';
import menu from '../../../../constants/menu.json';

import './style.scss';

export default function (props) {
  return (
    <div id="menuContainer">
      <div>
        <div id="siteTitle">SEKAI</div>
        <div className="menu">
          {menu.map((item, i) => (
            <Item
              key={i}
              data={item}
              index={i}
              active={props.activeMenu === i}
              onActive={() => {
                props.dispatch({
                  type: 'changePage',
                  payload: i,
                });
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
