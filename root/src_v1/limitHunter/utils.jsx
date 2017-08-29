/* eslint array-callback-return: 0 */
import $ from 'jquery';
// import React from 'react';

const tableMap = arr => [
  arr[0],
  // <a data-toggle="modal" data-target="#detailModal">{arr[1]}</a>,
  arr[1],
  arr[2],
  arr[3],
  arr[4],
  arr[6],
  arr[7],
  arr[10],
  arr[11],
  arr[12],
];

function getZhangsu(callback) {
  const time = new Date();
  $.ajax({
    url: 'http://q.10jqka.com.cn/index/index/board/all/field/zs/order/desc/page/1/ajax/1/',
    success: (html) => {
      const $table = $(html);
      const $tbody = $('tbody tr', $table);
      const dataArray = {
        head: tableMap($('thead tr th', $table).toArray().map(dom => dom.innerText)),
        body: [],
        time,
      };
      $tbody.map((index, $t) => {
        dataArray.body.push(tableMap($('td', $t).toArray().map(dom => dom.innerText)));
      });
      callback(dataArray);
    },
    dataType: 'html',
  });
}
function getZhangfu(callback) {
  const time = new Date();
  $.ajax({
    url: 'http://q.10jqka.com.cn/index/index/board/all/field/zdf/order/desc/page/1/ajax/1/',
    success: (html) => {
      const $table = $(html);
      const $tbody = $('tbody tr', $table);
      const dataArray = {
        head: tableMap($('thead tr th', $table).toArray().map(dom => dom.innerText)),
        body: [],
        time,
      };
      $tbody.map((index, $t) => {
        dataArray.body.push(tableMap($('td', $t).toArray().map(dom => dom.innerText)));
      });
      callback(dataArray);
    },
    dataType: 'html',
  });
}

// notify
// let notification = null;

function notify(text) {
  // if (!notification && Notification.permission === 'granted') {
  //   notification = new Notification(text);
  //   setTimeout(() => {
  //     notification.close();
  //     notification = null;
  //   }, 5000);
  // }

  const n = new Notification(text);
  setTimeout(n.close.bind(n), 4000);
}

function initnotify() {
  // Let's check if the browser supports notifications
  if (!window.Notification) {
    console.log('This browser does not support desktop notification');
  } else if (Notification.permission !== 'denied') {
    Notification.requestPermission((/* permission*/) => {
      // If the user is okay, let's create a notification
      // if (permission === "granted") {
      //   var notification = new Notification("Hi there!");
      // }
    });
  }
}

initnotify();

export {
  notify,
  getZhangsu,
  getZhangfu,
};
