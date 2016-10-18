exports.ids = [1];
exports.modules = {

/***/ 213:
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
        { className: 'module-ctn', style: { background: 'lightyellow' } },
        _react2.default.createElement(
            _reactRouter.Link,
            { className: 'topbar-link', to: '/wander', activeClassName: 'active' },
            '\u8FD4\u56DE'
        ),
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement('input', { type: 'text', placeholder: '\u8D26\u6237' })
        ),
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement('input', { type: 'text', placeholder: '\u5BC6\u7801' })
        ),
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
                'button',
                null,
                '\u767B\u9646'
            )
        )
    );
};

/***/ }

};;