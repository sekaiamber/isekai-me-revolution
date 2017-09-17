/* eslint no-confusing-arrow:0 */
/* eslint no-mixed-operators:0 */
import React, { Component } from 'react';
import classnames from 'classnames';
import autobind from 'autobind-decorator';

const anime = window.anime;
const duration = 150;

export default class extends Component {
  componentDidMount() {
    const name = this.name;
    const nameLetters = [];
    [].forEach.call(this.props.data.name, (char, i) => {
      const letter = document.createElement('span');
      letter.className = 'char' + i;
      letter.innerHTML = char;
      name.appendChild(letter);
      nameLetters.push(letter);
    });
    this.nameLetters = nameLetters;
    this.isActive = false;
    this.initialColor = window.getComputedStyle(this.nameLetters[0]).color;
    this.touchTap = false;
  }
  startAnime(cb) {
    anime.remove(this.nameLetters);
    anime({
      targets: this.nameLetters,
      delay: (t, i) => i * 30,
      translateY: [{
        value: (t, i) => i % 2 === 0 ? 10 : -10,
        duration,
        easing: 'easeInSine',
      }, {
        value: (t, i) => i % 2 === 0 ? [-10, 0] : [10, 0],
        duration: duration + 700,
        easing: 'easeOutElastic',
        elasticity: 600,
      }],
      opacity: [
        { value: 0, duration, easing: 'linear' },
        { value: 1, duration, easing: 'linear' },
      ],
      color: {
        value: this.props.data.color,
        duration: 1,
        delay: (t, i) => i * 20 + duration,
        easing: 'linear',
      },
    }).complete = cb;
  }
  endAnime() {
    anime.remove(this.nameLetters);
    anime({
      targets: this.nameLetters,
      delay: (t, i, l) => (l - i - 1) * 30,
      translateY: [{
        value: (t, i) => i % 2 === 0 ? -10 : 10,
        duration,
        easing: 'easeInSine',
      }, {
        value: (t, i) => i % 2 === 0 ? [10, 0] : [-10, 0],
        duration: duration + 700,
        easing: 'easeOutElastic',
        elasticity: 600,
      }],
      opacity: [
        { value: 0, duration, easing: 'linear' },
        { value: 1, duration, easing: 'linear' },
      ],
      color: {
        value: this.initialColor,
        duration: 1,
        delay: (t, i, l) => (l - i - 1) * 20 + duration,
        easing: 'linear',
      },
    });
  }
  @autobind
  handleClick() {
    if (!this.touchTap) {
      this.props.onActive();
    }
  }
  @autobind
  handleMouseEnter() {
    if (!this.touchTap) {
      this.mouseTimeout = setTimeout(() => {
        this.isActive = true;
        this.startAnime();
      }, 50);
    }
  }
  @autobind
  handleMouseLeave() {
    if (!this.touchTap) {
      clearTimeout(this.mouseTimeout);
      if (!this.isActive) return;
      this.isActive = false;
      this.endAnime();
    }
  }
  @autobind
  handleTouchStart() {
    this.touchTap = true;
    this.mouseTimeout = setTimeout(() => {
      this.isActive = true;
      this.startAnime(() => {
        this.touchTap = false;
        this.handleClick();
        this.endAnime();
      });
    }, 50);
  }
  render() {
    const { data, index, active = false } = this.props;
    const cls = classnames('menu-item', 'i0x0' + index, { active });
    return (
      <div
        className={cls}
        data-index={'0x0' + index}
        data-color={data.color}
        onMouseUp={this.handleClick}
        onMouseEnter={this.handleMouseEnter}
        onTouchStart={this.handleTouchStart}
        onMouseLeave={this.handleMouseLeave}
      >
        <span className="menu-item-name" ref={c => this.name = c} />
      </div>
    );
  }
}
