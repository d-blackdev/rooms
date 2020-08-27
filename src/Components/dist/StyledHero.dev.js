"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _room = _interopRequireDefault(require("../images/room-1.jpeg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\nmin-height: 60vh;\nbackground: url(", ") center/cover no-repeat;\ndisplay: flex;\nalign-items: center;\njustify-content: center;\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledHero = _styledComponents["default"].header(_templateObject(), function (props) {
  return props.img;
});

var _default = StyledHero;
exports["default"] = _default;