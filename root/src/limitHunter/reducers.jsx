/* eslint no-param-reassign:0 */
/* eslint no-confusing-arrow:0 */
import React from 'react';
import { notify, getZhangsu, getZhangfu } from './utils';

export default {
  updateZhangsuTable(_, { setState, dispatch }) {
    getZhangsu((data) => {
      data.body.forEach((tr) => {
        const id = tr[1];
        tr[1] = (
          <a
            data-toggle="modal"
            data-target="#detailModal"
            onClick={() => {
              dispatch({
                type: 'selectId',
                id,
              });
            }}
          >{id}</a>
        );
      }, this);
      setState({
        tableZhangsu: data,
      });
    });
  },
  updateZhangfuTable(_, { setState, dispatch }) {
    getZhangfu((data) => {
      data.body.forEach((tr) => {
        const id = tr[1];
        tr[1] = (
          <a
            data-toggle="modal"
            data-target="#detailModal"
            onClick={() => {
              dispatch({
                type: 'selectId',
                id,
              });
            }}
          >{id}</a>
        );
      }, this);
      setState({
        tableZhangfu: data,
      });
    });
  },
  selectId({ id }, { setState }) {
    setState({
      selectedId: id,
    });
  },
  checkZhangsu(_, { getState }) {
    const { tableZhangsu } = getState(state => state);
    const data = tableZhangsu.body;
    if (data) {
      const zhangfu = data.map(d => parseFloat(d[4])).map((d, i) => [i, isNaN(d) ? 0 : d]);
      const limitZhangfu = zhangfu.filter(d => d[1] > 9);
      if (limitZhangfu.length > 0) {
        const limitZhangfuIndex = limitZhangfu.map(d => d[0]);
        const limitAllZhangfu = data.filter((d, i) => limitZhangfuIndex.indexOf(i) > -1);
        const names = limitAllZhangfu.map(d => d[2]);
        notify(names);
      }
    }
  },
};
