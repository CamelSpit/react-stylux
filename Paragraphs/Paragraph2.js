'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Paragraph2 = function (_Component) {
    _inherits(Paragraph2, _Component);

    function Paragraph2(props) {
        _classCallCheck(this, Paragraph2);

        var _this = _possibleConstructorReturn(this, (Paragraph2.__proto__ || Object.getPrototypeOf(Paragraph2)).call(this, props));

        _this.state = {
            color: props.color || 'black',
            fontFamily: props.font || 'serif',
            fontSize: props.size || '0.9em',
            lineHeight: props.lineHeight || '1.22em',
            fontWeight: props.weight || '400',
            display: props.display || 'flex',
            align: props.align || 'center',
            padding: props.padding || '10px 10%',
            margin: props.margin || '0',
            id: props.id,
            className: props.className
        };
        return _this;
    }

    _createClass(Paragraph2, [{
        key: 'render',
        value: function render() {
            var PARAGRAPH = {
                width: 'inherit',
                color: this.state.color,
                fontFamily: this.state.fontFamily,
                fontSize: this.state.fontSize,
                lineHeight: this.state.lineHeight,
                fontWeight: this.state.fontWeight,
                display: this.state.display,
                flexDirection: 'column',
                alignItems: this.state.align,
                padding: this.state.padding,
                margin: this.state.margin
            };
            var CHILDS = _react2.default.Children.toArray(this.props.children);
            return _react2.default.createElement(
                'p',
                { style: PARAGRAPH, id: this.state.id, className: this.state.className },
                CHILDS[0]
            );
        }
    }]);

    return Paragraph2;
}(_react.Component);

exports.default = Paragraph2;