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

var BulletList1 = function (_Component) {
    _inherits(BulletList1, _Component);

    function BulletList1(props) {
        _classCallCheck(this, BulletList1);

        var _this = _possibleConstructorReturn(this, (BulletList1.__proto__ || Object.getPrototypeOf(BulletList1)).call(this, props));

        _this.state = {
            listItem: [],
            color: props.color || 'black',
            fontFamily: props.font || 'serif',
            fontSize: props.size || '1.333em',
            lineHeight: props.lineHeight || '1.5em',
            fontWeight: props.weight || '400',
            paddingLeft: props.paddingLeft,
            listStyleType: props.listStyleType || 'disc',
            listStyleImage: props.listStyleImage || 'none',
            listStylePosition: props.listStylePosition || 'inside',
            itemPadding: props.itemPadding,
            itemBGImage: props.itemBGImage,
            itemBGPosition: props.itemBGPosition,
            itemBGSize: props.itemBGSize,
            id: props.id,
            className: props.className
        };
        return _this;
    }

    _createClass(BulletList1, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var listItems = [];
            var CHILDS = _react2.default.Children.toArray(this.props.children.split('\\'));
            listItems = CHILDS.map(function (x) {
                return x;
            });
            this.setState({ listItem: listItems });
        }
    }, {
        key: 'render',
        value: function render() {
            var LISTSTYLE = {
                color: this.state.color,
                fontFamily: this.state.fontFamily,
                fontSize: this.state.fontSize,
                lineHeight: this.state.lineHeight,
                fontWeight: this.state.fontWeight,
                paddingLeft: this.state.paddingLeft,
                listStyleType: this.state.listStyleType,
                listStyleImage: this.state.listStyleImage,
                listStylePosition: this.state.listStylePosition
            };
            var LISTITEMSTYLE = {
                paddingLeft: this.state.itemPadding,
                backgroundImage: this.state.itemBGImage,
                backgroundPosition: this.state.itemBGPosition,
                backgroundSize: this.state.itemBGSize,
                backgroundRepeat: 'no-repeat'
            };
            var LIST = this.state.listItem.map(function (x, i) {
                return _react2.default.createElement(
                    'li',
                    { key: i, style: LISTITEMSTYLE },
                    x
                );
            });
            return _react2.default.createElement(
                'ul',
                { style: LISTSTYLE, id: this.state.id, className: this.state.className },
                LIST
            );
        }
    }]);

    return BulletList1;
}(_react.Component);

exports.default = BulletList1;