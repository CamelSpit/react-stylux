'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('../css/SuperStyleSheet.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* Start of Figure Blocks */
var Figure = function (_Component) {
    _inherits(Figure, _Component);

    function Figure(props) {
        _classCallCheck(this, Figure);

        var _this = _possibleConstructorReturn(this, (Figure.__proto__ || Object.getPrototypeOf(Figure)).call(this, props));

        _this.state = {
            size: props.size || 'sm',
            figid: props.figid,
            figCapid: props.figCapid,
            figClassName: props.figClassName,
            figCapClassName: props.figCapClassName
        };
        return _this;
    }

    _createClass(Figure, [{
        key: 'render',
        value: function render() {
            var CAPTION = {
                padding: '10px',
                color: 'gray',
                textAlign: 'center'
            };
            var CHILDS = _react2.default.Children.toArray(this.props.children);
            return _react2.default.createElement(
                'figure',
                { id: this.state.figid, className: this.state.figClassName },
                CHILDS[0],
                _react2.default.createElement(
                    'figcaption',
                    { style: CAPTION, id: this.state.figCapid, className: this.state.figCapClassName },
                    CHILDS[1]
                )
            );
        }
    }]);

    return Figure;
}(_react.Component);

exports.default = Figure;