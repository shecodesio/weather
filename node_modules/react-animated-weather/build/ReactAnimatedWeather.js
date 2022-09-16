'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _skycons = require('./skycons');

var _skycons2 = _interopRequireDefault(_skycons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function setIcon(icon, animate, skyconIcon, canvas) {
  skyconIcon.add(canvas, _skycons2.default[icon]);
  if (animate) {
    skyconIcon.play();
  }
}

var ReactAnimatedWeather = function ReactAnimatedWeather(_ref) {
  var icon = _ref.icon,
      color = _ref.color,
      size = _ref.size,
      animate = _ref.animate;

  var skyconCanvas = (0, _react.useRef)(null);

  (0, _react.useEffect)(function () {
    var skyconIcon = new _skycons2.default({ color: color, resizeClear: true });
    var canvas = skyconCanvas.current;
    setIcon(icon, animate, skyconIcon, canvas);

    return function () {
      skyconIcon.remove(canvas);
    };
  }, [icon, color, animate, size]);

  return _react2.default.createElement('canvas', { ref: skyconCanvas, width: size, height: size });
};

ReactAnimatedWeather.defaultProps = {
  animate: true,
  size: 64,
  color: 'black'
};

ReactAnimatedWeather.propTypes = {
  icon: _propTypes2.default.oneOf(['CLEAR_DAY', 'CLEAR_NIGHT', 'PARTLY_CLOUDY_DAY', 'PARTLY_CLOUDY_NIGHT', 'CLOUDY', 'RAIN', 'SLEET', 'SNOW', 'WIND', 'FOG']).isRequired,
  animate: _propTypes2.default.bool,
  size: _propTypes2.default.number,
  color: _propTypes2.default.string
};

exports.default = ReactAnimatedWeather;