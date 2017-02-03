import React from 'react';
import { render } from 'react-dom';
import Index from './index';
import createStore from '../store';

const store = createStore();
window.store = store;

render(<Index store={store} />, document.getElementById('main'));
