webpackJsonp([2],[function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}var o=n(1),a=r(o),i=n(11),u=n(32),s=r(u),c=n(10),l=r(c),f=(0,l["default"])();window.store=f,(0,i.render)(a["default"].createElement(s["default"],{store:f}),document.getElementById("main"))},,function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var a=this[o][0];"number"==typeof a&&(r[a]=!0)}for(o=0;o<t.length;o++){var i=t[o];"number"==typeof i[0]&&r[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),e.push(i))}},e}},function(e,t,n){function r(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=p[r.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](r.parts[a]);for(;a<r.parts.length;a++)o.parts.push(c(r.parts[a],t))}else{for(var i=[],a=0;a<r.parts.length;a++)i.push(c(r.parts[a],t));p[r.id]={id:r.id,refs:1,parts:i}}}}function o(e){for(var t=[],n={},r=0;r<e.length;r++){var o=e[r],a=o[0],i=o[1],u=o[2],s=o[3],c={css:i,media:u,sourceMap:s};n[a]?n[a].parts.push(c):t.push(n[a]={id:a,parts:[c]})}return t}function a(e,t){var n=v(),r=g[g.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),g.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function i(e){e.parentNode.removeChild(e);var t=g.indexOf(e);t>=0&&g.splice(t,1)}function u(e){var t=document.createElement("style");return t.type="text/css",a(e,t),t}function s(e){var t=document.createElement("link");return t.rel="stylesheet",a(e,t),t}function c(e,t){var n,r,o;if(t.singleton){var a=b++;n=y||(y=u(t)),r=l.bind(null,n,a,!1),o=l.bind(null,n,a,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=s(t),r=d.bind(null,n),o=function(){i(n),n.href&&URL.revokeObjectURL(n.href)}):(n=u(t),r=f.bind(null,n),o=function(){i(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}function l(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=E(t,o);else{var a=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function f(e,t){var n=t.css,r=t.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function d(e,t){var n=t.css,r=t.sourceMap;r&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var o=new Blob([n],{type:"text/css"}),a=e.href;e.href=URL.createObjectURL(o),a&&URL.revokeObjectURL(a)}var p={},m=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},h=m(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),v=m(function(){return document.head||document.getElementsByTagName("head")[0]}),y=null,b=0,g=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=h()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var n=o(e);return r(n,t),function(e){for(var a=[],i=0;i<n.length;i++){var u=n[i],s=p[u.id];s.refs--,a.push(s)}if(e){var c=o(e);r(c,t)}for(var i=0;i<a.length;i++){var s=a[i];if(0===s.refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete p[s.id]}}}};var E=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t){},function(e,t,n){var r;n(8),r=n(6),e.exports=r},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(1),s=function(e){function t(e){return r(this,t),o(this,Object.getPrototypeOf(t).call(this,e))}return a(t,e),i(t,[{key:"componentDidMount",value:function(){}},{key:"componentWillUnmount",value:function(){}},{key:"shouldComponentUpdate",value:function(){return!1}},{key:"render",value:function(){return u.createElement("a",{href:"https://github.com/sekaiamber/isekai-me-revolution",className:"github-corner","aria-label":"View source on Github",target:"_blank"},u.createElement("svg",{width:"80",height:"80",viewBox:"0 0 250 250",style:{fill:"#151513",color:"#fff",position:"absolute",top:0,border:0,right:0},"aria-hidden":"true"},u.createElement("path",{d:"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z",className:"bg-color"}),u.createElement("path",{d:"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",fill:"currentColor",style:{transformOrigin:"130px 106px"},className:"octo-arm"}),u.createElement("path",{d:"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",fill:"currentColor",className:"octo-body"})))}}]),t}(u.Component);t["default"]=s},function(e,t,n){t=e.exports=n(2)(),t.push([e.id,".github-corner:hover .octo-arm{-webkit-animation:octocat-wave .56s ease-in-out;animation:octocat-wave .56s ease-in-out}@-webkit-keyframes octocat-wave{0%,to{-webkit-transform:rotate(0);transform:rotate(0)}20%,60%{-webkit-transform:rotate(-25deg);transform:rotate(-25deg)}40%,80%{-webkit-transform:rotate(10deg);transform:rotate(10deg)}}@keyframes octocat-wave{0%,to{-webkit-transform:rotate(0);transform:rotate(0)}20%,60%{-webkit-transform:rotate(-25deg);transform:rotate(-25deg)}40%,80%{-webkit-transform:rotate(10deg);transform:rotate(10deg)}}@media (max-width:500px){.github-corner:hover .octo-arm{-webkit-animation:none;animation:none}.github-corner .octo-arm{-webkit-animation:octocat-wave .56s ease-in-out;animation:octocat-wave .56s ease-in-out}}",""])},function(e,t,n){var r=n(7);"string"==typeof r&&(r=[[e.id,r,""]]),n(3)(r,{}),r.locals&&(e.exports=r.locals)},,function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.actionCreator=void 0,t["default"]=function(){return(0,o.createStore)(s["default"],(0,o.applyMiddleware)(i["default"],d["default"]))};var o=n(14),a=n(24),i=r(a),u=n(39),s=r(u),c=n(36),l=r(c),f=n(38),d=r(f);t.actionCreator=l["default"]},,function(e,t){e.exports=_},function(e,t){e.exports=ReactRedux},function(e,t){e.exports=Redux},,,,,function(e,t){"use strict";function n(e,t){return Object.prototype.hasOwnProperty.call(e,t)}e.exports=function(e,t,r,o){t=t||"&",r=r||"=";var a={};if("string"!=typeof e||0===e.length)return a;var i=/\+/g;e=e.split(t);var u=1e3;o&&"number"==typeof o.maxKeys&&(u=o.maxKeys);var s=e.length;u>0&&s>u&&(s=u);for(var c=0;s>c;++c){var l,f,d,p,m=e[c].replace(i,"%20"),h=m.indexOf(r);h>=0?(l=m.substr(0,h),f=m.substr(h+1)):(l=m,f=""),d=decodeURIComponent(l),p=decodeURIComponent(f),n(a,d)?Array.isArray(a[d])?a[d].push(p):a[d]=[a[d],p]:a[d]=p}return a}},function(e,t){"use strict";var n=function(e){switch(typeof e){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}};e.exports=function(e,t,r,o){return t=t||"&",r=r||"=",null===e&&(e=void 0),"object"==typeof e?Object.keys(e).map(function(o){var a=encodeURIComponent(n(o))+r;return Array.isArray(e[o])?e[o].map(function(e){return a+encodeURIComponent(n(e))}).join(t):a+encodeURIComponent(n(e[o]))}).join(t):o?encodeURIComponent(n(o))+r+encodeURIComponent(n(e)):""}},function(e,t,n){"use strict";t.decode=t.parse=n(19),t.encode=t.stringify=n(20)},,function(e,t,n){var r=n(21),o=n(12),a=n(25),i={},u="",s=function(e){var t="",n=r.stringify(e);return""!==n&&(t="?"+n),t},c=function(e){var t="http://www.gravatar.com/";return e&&(t="https://secure.gravatar.com/"),t},l=function(e){return e.email=e.email||u,e.type=o.trim(e.type),e.$emailHash=a(e.email.toLowerCase().trim()),e};i.imageUrl=function(e){e=l(e);var t=c(e.secure)+"avatar/",n=s(e.parameters);return t+e.$emailHash+n},i.getProfileUrl=function(e){e=l(e);var t=c(e.secure),n=["json","xml","qr","php","vcf"];o.includes(n,e.type)||(e.type="json");var r=s(e.parameters);return t+e.$emailHash+"."+e.type+r},e.exports=i},function(e,t){"use strict";function n(e){return function(t){var n=t.dispatch,r=t.getState;return function(t){return function(o){return"function"==typeof o?o(n,r,e):t(o)}}}}t.__esModule=!0;var r=n();r.withExtraArgument=n,t["default"]=r},function(e,t,n){var r;!function(o){"use strict";function a(e,t){var n=(65535&e)+(65535&t),r=(e>>16)+(t>>16)+(n>>16);return r<<16|65535&n}function i(e,t){return e<<t|e>>>32-t}function u(e,t,n,r,o,u){return a(i(a(a(t,e),a(r,u)),o),n)}function s(e,t,n,r,o,a,i){return u(t&n|~t&r,e,t,o,a,i)}function c(e,t,n,r,o,a,i){return u(t&r|n&~r,e,t,o,a,i)}function l(e,t,n,r,o,a,i){return u(t^n^r,e,t,o,a,i)}function f(e,t,n,r,o,a,i){return u(n^(t|~r),e,t,o,a,i)}function d(e,t){e[t>>5]|=128<<t%32,e[(t+64>>>9<<4)+14]=t;var n,r,o,i,u,d=1732584193,p=-271733879,m=-1732584194,h=271733878;for(n=0;n<e.length;n+=16)r=d,o=p,i=m,u=h,d=s(d,p,m,h,e[n],7,-680876936),h=s(h,d,p,m,e[n+1],12,-389564586),m=s(m,h,d,p,e[n+2],17,606105819),p=s(p,m,h,d,e[n+3],22,-1044525330),d=s(d,p,m,h,e[n+4],7,-176418897),h=s(h,d,p,m,e[n+5],12,1200080426),m=s(m,h,d,p,e[n+6],17,-1473231341),p=s(p,m,h,d,e[n+7],22,-45705983),d=s(d,p,m,h,e[n+8],7,1770035416),h=s(h,d,p,m,e[n+9],12,-1958414417),m=s(m,h,d,p,e[n+10],17,-42063),p=s(p,m,h,d,e[n+11],22,-1990404162),d=s(d,p,m,h,e[n+12],7,1804603682),h=s(h,d,p,m,e[n+13],12,-40341101),m=s(m,h,d,p,e[n+14],17,-1502002290),p=s(p,m,h,d,e[n+15],22,1236535329),d=c(d,p,m,h,e[n+1],5,-165796510),h=c(h,d,p,m,e[n+6],9,-1069501632),m=c(m,h,d,p,e[n+11],14,643717713),p=c(p,m,h,d,e[n],20,-373897302),d=c(d,p,m,h,e[n+5],5,-701558691),h=c(h,d,p,m,e[n+10],9,38016083),m=c(m,h,d,p,e[n+15],14,-660478335),p=c(p,m,h,d,e[n+4],20,-405537848),d=c(d,p,m,h,e[n+9],5,568446438),h=c(h,d,p,m,e[n+14],9,-1019803690),m=c(m,h,d,p,e[n+3],14,-187363961),p=c(p,m,h,d,e[n+8],20,1163531501),d=c(d,p,m,h,e[n+13],5,-1444681467),h=c(h,d,p,m,e[n+2],9,-51403784),m=c(m,h,d,p,e[n+7],14,1735328473),p=c(p,m,h,d,e[n+12],20,-1926607734),d=l(d,p,m,h,e[n+5],4,-378558),h=l(h,d,p,m,e[n+8],11,-2022574463),m=l(m,h,d,p,e[n+11],16,1839030562),p=l(p,m,h,d,e[n+14],23,-35309556),d=l(d,p,m,h,e[n+1],4,-1530992060),h=l(h,d,p,m,e[n+4],11,1272893353),m=l(m,h,d,p,e[n+7],16,-155497632),p=l(p,m,h,d,e[n+10],23,-1094730640),d=l(d,p,m,h,e[n+13],4,681279174),h=l(h,d,p,m,e[n],11,-358537222),m=l(m,h,d,p,e[n+3],16,-722521979),p=l(p,m,h,d,e[n+6],23,76029189),d=l(d,p,m,h,e[n+9],4,-640364487),h=l(h,d,p,m,e[n+12],11,-421815835),m=l(m,h,d,p,e[n+15],16,530742520),p=l(p,m,h,d,e[n+2],23,-995338651),d=f(d,p,m,h,e[n],6,-198630844),h=f(h,d,p,m,e[n+7],10,1126891415),m=f(m,h,d,p,e[n+14],15,-1416354905),p=f(p,m,h,d,e[n+5],21,-57434055),d=f(d,p,m,h,e[n+12],6,1700485571),h=f(h,d,p,m,e[n+3],10,-1894986606),m=f(m,h,d,p,e[n+10],15,-1051523),p=f(p,m,h,d,e[n+1],21,-2054922799),d=f(d,p,m,h,e[n+8],6,1873313359),h=f(h,d,p,m,e[n+15],10,-30611744),m=f(m,h,d,p,e[n+6],15,-1560198380),p=f(p,m,h,d,e[n+13],21,1309151649),d=f(d,p,m,h,e[n+4],6,-145523070),h=f(h,d,p,m,e[n+11],10,-1120210379),m=f(m,h,d,p,e[n+2],15,718787259),p=f(p,m,h,d,e[n+9],21,-343485551),d=a(d,r),p=a(p,o),m=a(m,i),h=a(h,u);return[d,p,m,h]}function p(e){var t,n="",r=32*e.length;for(t=0;r>t;t+=8)n+=String.fromCharCode(e[t>>5]>>>t%32&255);return n}function m(e){var t,n=[];for(n[(e.length>>2)-1]=void 0,t=0;t<n.length;t+=1)n[t]=0;var r=8*e.length;for(t=0;r>t;t+=8)n[t>>5]|=(255&e.charCodeAt(t/8))<<t%32;return n}function h(e){return p(d(m(e),8*e.length))}function v(e,t){var n,r,o=m(e),a=[],i=[];for(a[15]=i[15]=void 0,o.length>16&&(o=d(o,8*e.length)),n=0;16>n;n+=1)a[n]=909522486^o[n],i[n]=1549556828^o[n];return r=d(a.concat(m(t)),512+8*t.length),p(d(i.concat(r),640))}function y(e){var t,n,r="0123456789abcdef",o="";for(n=0;n<e.length;n+=1)t=e.charCodeAt(n),o+=r.charAt(t>>>4&15)+r.charAt(15&t);return o}function b(e){return unescape(encodeURIComponent(e))}function g(e){return h(b(e))}function E(e){return y(g(e))}function _(e,t){return v(b(e),b(t))}function w(e,t){return y(_(e,t))}function C(e,t,n){return t?n?_(t,e):w(t,e):n?g(e):E(e)}r=function(){return C}.call(t,n,t,e),!(void 0!==r&&(e.exports=r))}(this)},,,,,,,function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(1),l=r(c),f=n(13),d=n(5),p=r(d),m=n(10),h=n(34),v=r(h),y=n(33),b=r(y);n(4),n(35),n(51);var g=m.actionCreator.message,E=function(e){function t(){return o(this,t),a(this,Object.getPrototypeOf(t).apply(this,arguments))}return i(t,e),s(t,[{key:"componentDidMount",value:function(){this.props.dispatch(g.initMessages())}},{key:"handleMore",value:function(){this.props.dispatch(g.queryMessages(this.props.lastKey,11))}},{key:"render",value:function(){var e=this;return l["default"].createElement("div",{className:"container"},l["default"].createElement(p["default"],null),l["default"].createElement("h1",null,"Sekai的留言板"),l["default"].createElement("ul",null,l["default"].createElement("li",null,"请留下你想说的，可以是段子，可以发小黄图，也可以提意见。"),l["default"].createElement("li",null,"图片之类的，支持",l["default"].createElement("a",{href:"https://guides.github.com/features/mastering-markdown/"},"Markdown(GFM)"),"语法。"),l["default"].createElement("li",null,"本区域内容为",l["default"].createElement("b",null,"实时更新"),"，也是为实时技术做的一次尝试。")),l["default"].createElement(v["default"],{store:this.props.store}),this.props.messages.map(function(t){return l["default"].createElement(b["default"],u({},t,{key:t._key,dispatch:e.props.dispatch}))}),l["default"].createElement("div",{className:"more",onClick:this.handleMore.bind(this)},"More"))}}]),t}(l["default"].Component),_=function(e){return u({},e.messages)},w=(0,f.connect)(_)(E),C=function(e){function t(){return o(this,t),a(this,Object.getPrototypeOf(t).apply(this,arguments))}return i(t,e),s(t,[{key:"render",value:function(){return l["default"].createElement(f.Provider,{store:this.props.store},l["default"].createElement(w,{store:this.props.store}))}}]),t}(l["default"].Component);t["default"]=C},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function u(e){var t=new Date(e);return t.getMonth()+1+"月"+t.getDate()+"日"}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(1),l=r(c),f=n(23),d=r(f),p=n(69),m=r(p),h=n(10);n(52);var v=h.actionCreator.message.ooxxMessage,y=function(e){function t(e){o(this,t);var n=a(this,Object.getPrototypeOf(t).call(this,e));return n.state={voted:!1},n}return i(t,e),s(t,[{key:"handleooxx",value:function(e){var t=this;this.state.voted||this.props.dispatch(v(this.props._key,e,function(){t.setState({voted:!0})}))}},{key:"render",value:function(){return l["default"].createElement("div",{className:"message"},l["default"].createElement("div",{className:"gravatar"},l["default"].createElement("img",{src:d["default"].imageUrl({email:this.props.email,parameters:{size:"160"}}),alt:""})),l["default"].createElement("div",{className:"content-container"},l["default"].createElement("div",{className:"presenter"},this.props.presenter),l["default"].createElement("div",{className:"content",dangerouslySetInnerHTML:{__html:(0,m["default"])(this.props.content)}}),l["default"].createElement("div",{className:this.state.voted?"opts voted":"opts"},u(this.props.createAt)," ",l["default"].createElement("span",{className:"oo",onClick:this.handleooxx.bind(this,"oo")},"OO")," [",this.props.oo,"] ",l["default"].createElement("span",{className:"xx",onClick:this.handleooxx.bind(this,"xx")},"XX")," [",this.props.xx,"]")))}}]),t}(l["default"].Component);t["default"]=y},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(1),c=r(s),l=n(13),f=n(12),d=r(f),p=n(10);n(4);var m=p.actionCreator.message,h="__NOT_CHANGE__",v=function(e){function t(e){o(this,t);var n=a(this,Object.getPrototypeOf(t).call(this,e));return n.state={content:"",email:"",presenter:"",honeypot:h,isContentError:!1,isEmailError:!1,isPresenterError:!1},n}return i(t,e),u(t,[{key:"handleSubmit",value:function(){var e={content:d["default"].trim(this.state.content),email:d["default"].trim(this.state.email),presenter:d["default"].trim(this.state.presenter),isContentError:!1,isEmailError:!1,isPresenterError:!1};return""===e.content&&(e.isContentError=!0),""===e.presenter&&(e.isPresenterError=!0),""!==e.email&&/^([\w-+=_])+(\.[\w-+=_]+)*@([\w-+=_])+((\.[\w-+=_]+)+)$/.test(e.email)||(e.isEmailError=!0),this.state.honeypot!==h||""!==this.honeypot.value?void console.log("You are not human!"):(this.setState({isContentError:e.isContentError,isEmailError:e.isEmailError,isPresenterError:e.isPresenterError}),void(e.isContentError||e.isEmailError||e.isPresenterError||this.props.dispatch(m.addMessage(e))))}},{key:"render",value:function(){var e=this;return c["default"].createElement("div",{className:"submit-area"},c["default"].createElement("div",{className:"inline row"},c["default"].createElement("div",{className:"col-md-6"},c["default"].createElement("label",{htmlFor:"presenter"},"称呼："),c["default"].createElement("input",{id:"presenter",className:this.state.isPresenterError?"error":"",name:"presenter",type:"text",placeholder:"你是谁？",onChange:function(t){return e.setState({presenter:t.currentTarget.value})},"data-error-message":"不能空！"})),c["default"].createElement("div",{className:"col-md-6"},c["default"].createElement("label",{htmlFor:"email"},"邮箱："),c["default"].createElement("input",{id:"email",className:this.state.isEmailError?"error":"",name:"email",type:"text",placeholder:"关乎Gravatar头像",onChange:function(t){return e.setState({email:t.currentTarget.value})},"data-error-message":"认真点！"})),c["default"].createElement("div",{className:"col-md-6 honeypot-container"},c["default"].createElement("label",{htmlFor:"honeypot"},"蜜罐："),c["default"].createElement("input",{ref:function(t){return e.honeypot=t},id:"honeypot",name:"honeypot",type:"text",placeholder:"这是机器人蜜罐",onChange:function(t){return e.setState({honeypot:t.currentTarget.value})}}))),c["default"].createElement("div",{className:"content-container"},c["default"].createElement("label",{htmlFor:"content"},"内容："),c["default"].createElement("textarea",{id:"content",className:this.state.isContentError?"error":"",name:"content",type:"text",onChange:function(t){return e.setState({content:t.currentTarget.value})}})),c["default"].createElement("div",{className:"button-container"},c["default"].createElement("button",{onClick:this.handleSubmit.bind(this)},"Submit")))}}]),t}(c["default"].Component),y=(0,l.connect)(function(){return{}})(v),b=function(e){function t(){return o(this,t),a(this,Object.getPrototypeOf(t).apply(this,arguments))}return i(t,e),u(t,[{key:"render",value:function(){return c["default"].createElement(l.Provider,{store:this.props.store},c["default"].createElement(y,null))}}]),t}(c["default"].Component);t["default"]=b},function(e,t){"use strict";Array.prototype.unique2=function(){for(var e=arguments.length<=0||void 0===arguments[0]?function(e){return e}:arguments[0],t={},n=[],r=0;r<this.length;r+=1){var o=e(this[r]);t[o]||(t[o]=!0,n.push(this[r]))}return n}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(37),a=r(o);t["default"]={message:a["default"]}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){var n=Object.keys(t).map(function(e){return c({},t[e],{_key:e})});e({type:"MESSAGE_DUMP",messages:n})}function a(e){return function(){var t=c({},e,{createAt:(new Date).getTime(),oo:0,xx:0});p.push(t,function(e){null===e||console.error(e)})}}function i(e,t){return function(n){p.orderByKey().endAt(e).limitToLast(t).once("value",function(e){o(n,e.val())})}}function u(){return function(e){p.endAt(0).limitToLast(10).on("child_added",function(t){var n={};n[t.key()]=t.val(),o(e,n)}),p.on("child_changed",function(t){var n=t.val();e({type:"MESSAGE_UPDATE",message:c({},n,{_key:t.key()})})})}}function s(e,t,n){return function(){p.child(e+"/"+t).transaction(function(e){return null==e?0:e+1}).then(function(e){e.committed?(console.log(t+" success"),n()):console.log(t+" failed")})}}Object.defineProperty(t,"__esModule",{value:!0});var c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l=n(70),f=r(l),d={syncURL:"https://isekai-me.wilddogio.com/"};f["default"].initializeApp(d);var p=f["default"].sync().ref("messages");t["default"]={addMessage:a,queryMessages:i,initMessages:u,ooxxMessage:s}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(12),a=r(o),i=a["default"].curry(function(e,t,n){var r=e.dispatch;e.getState,0!==n.type.lastIndexOf("LOG",0)&&r({type:"LOG_PUSH",action:n}),t(n)});t["default"]=i},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(14),a=n(41),i=r(a),u=n(40),s=r(u);t["default"]=(0,o.combineReducers)({messages:i["default"],log:s["default"]})},function(e,t){"use strict";function n(){var e=arguments.length<=0||void 0===arguments[0]?[]:arguments[0],t=arguments[1];switch(t.type){case"LOG_PUSH":return e.push(t.action),e;default:return e}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=n},function(e,t){"use strict";function n(e,t){var n=t.concat(e.messages).unique2(function(e){return e._key}).sort(function(e,t){return t.createAt-e.createAt});return a({},e,{messages:n,lastKey:n[n.length-1]._key})}function r(e,t){for(var n=e.messages.slice(),r=0;r<n.length;r+=1)if(n[r]._key===t._key){n[r]=a({},t);break}var o=a({},e,{messages:n});return o}function o(){var e=arguments.length<=0||void 0===arguments[0]?i:arguments[0],t=arguments[1];switch(t.type){case"MESSAGE_DUMP":return n(e,t.messages);case"MESSAGE_UPDATE":return r(e,t.message);default:return e}}Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i={lastKey:"",messages:[]};t["default"]=o},,,,,,,,,,4,4,,,,,,,,,,,,,,,,,function(e,t){e.exports=marked},function(e,t){e.exports=wilddog}]);