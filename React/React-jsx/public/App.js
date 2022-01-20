"use strict";

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Welcome() {
  return /*#__PURE__*/React.createElement("h1", null, "Hello from App.jsx");
}

var element = /*#__PURE__*/React.createElement(Welcome, null);

_react.default.render(element, document.getElementById('root'));