"use strict";

setInterval(tick, 1000);

function tick() {
  var element = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Hello, world!"), /*#__PURE__*/React.createElement("h2", null, "It is ", new Date().toLocaleTimeString(), "."));
  ReactDOM.render(element, document.getElementById('contents'));
}