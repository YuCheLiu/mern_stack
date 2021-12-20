"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Buttonadd = /*#__PURE__*/function (_React$Component) {
  _inherits(Buttonadd, _React$Component);

  var _super = _createSuper(Buttonadd);

  function Buttonadd() {
    var _this;

    _classCallCheck(this, Buttonadd);

    _this = _super.call(this);
    _this.state = {
      number: "constructor"
    }; //this bind is necessary to let 'this' work in the callback

    _this.handleAdd = _this.handleAdd.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Buttonadd, [{
    key: "handleAdd",
    value: function handleAdd() {
      this.setState({
        number: "Hello from ButtonAdd"
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, this.state.number), /*#__PURE__*/React.createElement("button", {
        onClick: this.handleAdd
      }, "Click me"));
    }
  }]);

  return Buttonadd;
}(React.Component);

var list = [1, 2, 3, 4];

var Buttonlistadd = /*#__PURE__*/function (_React$Component2) {
  _inherits(Buttonlistadd, _React$Component2);

  var _super2 = _createSuper(Buttonlistadd);

  function Buttonlistadd() {
    var _this2;

    _classCallCheck(this, Buttonlistadd);

    _this2 = _super2.call(this);

    _defineProperty(_assertThisInitialized(_this2), "handleAdd", function () {
      list.push(22);

      _this2.setState({
        number: list
      });
    });

    _this2.state = {
      number: list
    };
    _this2.handleAdd = _this2.handleAdd.bind(_assertThisInitialized(_this2));
    return _this2;
  } // handleAdd(){
  //     list.push(22)
  //     this.setState({number : list});
  // }


  _createClass(Buttonlistadd, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, this.state.number), /*#__PURE__*/React.createElement("button", {
        onClick: this.handleAdd
      }, "Click me"));
    }
  }]);

  return Buttonlistadd;
}(React.Component);

var element = /*#__PURE__*/React.createElement(Buttonlistadd, null);
ReactDOM.render(element, document.getElementById('contents'));