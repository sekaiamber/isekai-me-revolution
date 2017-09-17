/* eslint no-param-reassign: 0 */
/* eslint no-mixed-operators: 0 */
import React, { Component } from 'react';

import './style.scss';

const anime = window.anime;

//          stuff(1)
//      home(0)
// about(2)   contact(3)

// [1, -1] 右上，
// [1, 1] 右下，
// [-1, 1] 左下，
// [-1, -1] 左上，

// [-1, 0] 左，{ top: 0, left: 0, heigth: '100%' }，width [0, '100%'], { right: 0, left: 'auto' }, width ['100%', 0]
// [1, 0] 右，{ top: 0, right: 0, heigth: '100%' }，width [0, '100%'], { left: 0, right: 'auto' }, width ['100%', 0]
// [0, -1] 上，{ top: 0, left: 0, width: '100%' }，height [0, '100%']，{ top: 'auto', bottom: 0 }，height [0, '100%']
// [0, 1] 下，{ bottom: 0, left: 0, width: '100%' }，height [0, '100%']，{ bottom: 'auto', top: 0 }，height [0, '100%']

const duration = 300;


export default class extends Component {
  constructor(props) {
    super(props);
    this.layers = [];
  }
  shouldComponentUpdate(props) {
    const current = this.props.target;
    const next = props.target;
    const target = [
      next[0] - current[0],
      next[1] - current[1],
    ];
    if (target[0] < -1) target[0] = -1;
    if (target[1] < -1) target[1] = -1;
    if (target[0] > 1) target[0] = 1;
    if (target[1] > 1) target[1] = 1;

    const value = this.getAnimeValue(target);
    if (value) {
      this.putLayersStep1(target);
      const self = this;
      setTimeout(() => {
        anime({
          targets: this.layers,
          delay: (t, i) => i * duration,
          // easing: [0.215, 0.610, 0.355, 1],
          easing: 'easeInOutQuart',
          duration: (t, i) => (this.layers.length - i) * duration,
          ...value[0],
        }).complete = () => {
          self.putLayersStep2(target);
          self.props.dispatch({
            type: 'activePage',
          });
          self.layers.reverse();
          anime({
            targets: self.layers,
            delay: (t, i) => i * duration,
            // easing: [0.215, 0.610, 0.355, 1],
            easing: 'easeOutQuart',
            duration: (t, i) => (i + 1) * duration,
            ...value[1],
          }).complete = () => {
            self.layers.reverse();
            this.maskContainer.style.display = 'none';
          };
        };
      }, 100);
    }
    return false;
  }
  getAnimeValue(target) {
    const X = target[0];
    const Y = target[1];
    // 左右
    if (
      (X === -1 && Y === 0) ||
      (X === 1 && Y === 0)
    ) {
      return [{
        width: [0, '100%'],
      }, {
        width: ['100%', 0],
      }];
    }
    // 上下
    if (
      (X === 0 && Y === -1) ||
      (X === 0 && Y === 1)
    ) {
      return [{
        height: [0, '100%'],
      }, {
        height: ['100%', 0],
      }];
    }
    // 斜角
    if (
      (X === 1 && Y === -1) ||
      (X === 1 && Y === 1) ||
      (X === -1 && Y === 1) ||
      (X === -1 && Y === -1)
    ) {
      return [{
        width: [0, '100%'],
      }, {
        width: ['100%', 0],
      }];
    }
    return null;
  }
  putLayersStep1(target) {
    const layers = this.layers;
    const X = target[0];
    const Y = target[1];
    // reset
    layers.forEach((layer) => {
      layer.style.top = 'auto';
      layer.style.left = 'auto';
      layer.style.right = 'auto';
      layer.style.bottom = 'auto';
      layer.style.width = '0';
      layer.style.height = '0';
    });
    this.mask.style.height = '100%';
    this.mask.style.width = '100%';
    this.maskContainer.style.display = 'block';
    this.maskRotate.style.transform = 'rotate(0deg)';
    // 左
    if (X === -1 && Y === 0) {
      layers.forEach((layer) => {
        layer.style.top = 0;
        layer.style.left = 0;
        layer.style.height = '100%';
      });
    }
    // 右
    if (X === 1 && Y === 0) {
      layers.forEach((layer) => {
        layer.style.top = 0;
        layer.style.right = 0;
        layer.style.height = '100%';
      });
    }
    // 上
    if (X === 0 && Y === -1) {
      layers.forEach((layer) => {
        layer.style.top = 0;
        layer.style.left = 0;
        layer.style.width = '100%';
      });
    }
    // 下
    if (X === 0 && Y === 1) {
      layers.forEach((layer) => {
        layer.style.bottom = 0;
        layer.style.left = 0;
        layer.style.width = '100%';
      });
    }
    // 斜角
    if (
      (X === 1 && Y === -1) ||
      (X === 1 && Y === 1) ||
      (X === -1 && Y === 1) ||
      (X === -1 && Y === -1)
    ) {
      const wh = window.innerHeight;
      const ww = window.innerWidth;
      const len = (wh + ww) / 2 * Math.sqrt(2);
      this.mask.style.height = len + 'px';
      this.mask.style.width = len + 'px';
      // 右上
      if (X === 1 && Y === -1) this.maskRotate.style.transform = 'rotate(135deg)';
      // 右下
      if (X === 1 && Y === 1) this.maskRotate.style.transform = 'rotate(225deg)';
      // 左下
      if (X === -1 && Y === 1) this.maskRotate.style.transform = 'rotate(315deg)';
      // 左上
      if (X === -1 && Y === -1) this.maskRotate.style.transform = 'rotate(45deg)';
      layers.forEach((layer) => {
        layer.style.top = 0;
        layer.style.left = 0;
        layer.style.height = '100%';
      });
    }
  }
  putLayersStep2(target) {
    const layers = this.layers;
    const X = target[0];
    const Y = target[1];
    // 左
    if (X === -1 && Y === 0) {
      layers.forEach((layer) => {
        layer.style.left = 'auto';
        layer.style.right = 0;
      });
    }
    // 右
    if (X === 1 && Y === 0) {
      layers.forEach((layer) => {
        layer.style.right = 'auto';
        layer.style.left = 0;
      });
    }
    // 上
    if (X === 0 && Y === -1) {
      layers.forEach((layer) => {
        layer.style.top = 'auto';
        layer.style.bottom = 0;
      });
    }
    // 上
    if (X === 0 && Y === 1) {
      layers.forEach((layer) => {
        layer.style.bottom = 'auto';
        layer.style.top = 0;
      });
    }
    // 斜角
    if (
      (X === 1 && Y === -1) ||
      (X === 1 && Y === 1) ||
      (X === -1 && Y === 1) ||
      (X === -1 && Y === -1)
    ) {
      layers.forEach((layer) => {
        layer.style.left = 'auto';
        layer.style.right = 0;
      });
    }
  }
  render() {
    return (
      <div className="mask-container" ref={c => this.maskContainer = c}>
        <div className="mask-rotate" ref={c => this.maskRotate = c}>
          <div id="mask" ref={c => this.mask = c}>
            <div className="mask-layer i0x00" ref={c => this.layers[0] = c} />
            <div className="mask-layer i0x01" ref={c => this.layers[1] = c} />
            <div className="mask-layer i0x02" ref={c => this.layers[2] = c} />
            <div className="mask-layer i0x03" ref={c => this.layers[3] = c} />
          </div>
        </div>
      </div>
    );
  }
}
