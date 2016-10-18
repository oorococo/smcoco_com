exports.ids = [3];
exports.modules = {

/***/ 211:
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
        { className: 'module-ctn', style: { background: 'green' } },
        _react2.default.createElement(
            _reactRouter.Link,
            { className: 'topbar-link', to: '/wander', activeClassName: 'active' },
            '\u8FD4\u56DE'
        ),
        '\u6765\u6CE8\u518C\u628A'
    );
};

/***/ }

};;