import React from 'react';
import { render } from 'react-dom';
import Index from './index';
import Menu, { MenuBt } from './menu';

render(<Index />, document.getElementById('main'));

const menuBt = document.createElement('div');
menuBt.id = 'menuBtContainer';
document.body.insertBefore(menuBt, document.body.firstChild);
render(<MenuBt />, document.getElementById('menuBtContainer'));
const menu = document.createElement('div');
menu.id = 'menuContainer';
document.body.insertBefore(menu, document.body.firstChild);
render(<Menu />, document.getElementById('menuContainer'));
