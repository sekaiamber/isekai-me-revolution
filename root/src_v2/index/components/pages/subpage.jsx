import React from 'react';

import './subpage.scss';

export default function (Component) {
  return function SubpageWrapperComponent(props) {
    return (
      <div className="sub-page">
        <div className="back-bt">
          <span onClick={() => props.dispatch({ type: 'changePage', payload: 0 })}>home</span>
        </div>
        <Component {...props} />
      </div>
    );
  };
}
