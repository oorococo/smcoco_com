exports.ids = [2];
exports.modules = {

/***/ 212:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(8);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(15);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
    return _react2.default.createElement(
        'div',
        { className: 'module-ctn', style: { background: 'pink' } },
        _react2.default.createElement(
            _reactRouter.Link,
            { className: 'topbar-link', to: '/wander', activeClassName: 'active' },
            '\u8FD4\u56DE'
        ),
        _react2.default.createElement(
            _reactRouter.Link,
            { className: 'topbar-link', to: '/', activeClassName: 'active' },
            '\u8FD4\u56DEcoco'
        ),
        _react2.default.createElement(
            _reactRouter.Link,
            { className: 'topbar-link', to: '/music', activeClassName: 'active' },
            '\u5230Music'
        ),
        _react2.default.createElement(
            _reactRouter.Link,
            { className: 'topbar-link', to: '/music/login', activeClassName: 'active' },
            '\u5230Music Login'
        ),
        '\u7B49\u9732\u9875\u9762'
    );
};

/***/ }

};;