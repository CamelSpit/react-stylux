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

/* Start of Rounded Rectangle Image */
var RoundedRectangleImage = function (_Component) {
    _inherits(RoundedRectangleImage, _Component);

    function RoundedRectangleImage(props) {
        _classCallCheck(this, RoundedRectangleImage);

        var _this = _possibleConstructorReturn(this, (RoundedRectangleImage.__proto__ || Object.getPrototypeOf(RoundedRectangleImage)).call(this, props));

        _this.state = {
            size: props.size || 'sm',
            id: props.id,
            className: props.className
        };
        return _this;
    }

    _createClass(RoundedRectangleImage, [{
        key: 'render',
        value: function render() {
            var ROUNDEDRECTANGLEIMG = {
                borderRadius: "30%"
            };
            var CHILDS = _react2.default.Children.toArray(this.props.children);
            return _react2.default.createElement('img', { style: ROUNDEDRECTANGLEIMG, id: this.state.id, className: 'recimg-' + this.state.size + ' ' + this.state.className, src: CHILDS[0], alt: CHILDS[1] });
        }
    }]);

    return RoundedRectangleImage;
}(_react.Component);

/* End of Rounded Rectangle Image */


exports.default = RoundedRectangleImage;