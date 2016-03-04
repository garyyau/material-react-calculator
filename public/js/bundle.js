(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Calculator = require('./components/Calculator.jsx');

var _Calculator2 = _interopRequireDefault(_Calculator);

var _Formula = require('./models/Formula.jsx');

var _Formula2 = _interopRequireDefault(_Formula);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CalculatorApp = function () {
	function CalculatorApp() {
		_classCallCheck(this, CalculatorApp);

		this.formula = new _Formula2.default();
	}

	_createClass(CalculatorApp, [{
		key: 'handleInput',
		value: function handleInput(value) {
			this.formula.updateFormula(value);
			this._calculator.updateDisplay();
		}
	}, {
		key: 'start',
		value: function start() {
			var _this = this;

			_reactDom2.default.render(_react2.default.createElement(_Calculator2.default, {
				formula: this.formula,
				inputHandler: this.handleInput.bind(this),
				ref: function ref(calculator) {
					return _this._calculator = calculator;
				}
			}), document.getElementById('container'));
		}
	}]);

	return CalculatorApp;
}();

document.addEventListener('DOMContentLoaded', function (event) {
	var calculatorApp = new CalculatorApp();
	calculatorApp.start();
});

},{"./components/Calculator.jsx":2,"./models/Formula.jsx":8,"react":undefined,"react-dom":undefined}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _DisplayTable = require('./DisplayTable.jsx');

var _DisplayTable2 = _interopRequireDefault(_DisplayTable);

var _Keypad = require('./Keypad.jsx');

var _Keypad2 = _interopRequireDefault(_Keypad);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Calculator = function (_React$Component) {
	_inherits(Calculator, _React$Component);

	function Calculator() {
		_classCallCheck(this, Calculator);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Calculator).apply(this, arguments));
	}

	_createClass(Calculator, [{
		key: 'updateDisplay',
		value: function updateDisplay() {
			this._displayTable.refresh();
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			return _react2.default.createElement(
				'div',
				{ className: 'calculator' },
				_react2.default.createElement(_DisplayTable2.default, {
					updateFormula: this.updateFormula,
					formula: this.props.formula,
					ref: function ref(displayTable) {
						return _this2._displayTable = displayTable;
					}
				}),
				_react2.default.createElement(_Keypad2.default, {
					inputHandler: this.props.inputHandler
				})
			);
		}
	}]);

	return Calculator;
}(_react2.default.Component);

exports.default = Calculator;

},{"./DisplayTable.jsx":4,"./Keypad.jsx":6,"react":undefined}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CurrentInputRow = function (_React$Component) {
  _inherits(CurrentInputRow, _React$Component);

  function CurrentInputRow() {
    _classCallCheck(this, CurrentInputRow);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(CurrentInputRow).apply(this, arguments));
  }

  return CurrentInputRow;
}(_react2.default.Component);

exports.default = CurrentInputRow;

},{"react":undefined}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _CurrentInputRow = require('./CurrentInputRow.jsx');

var _CurrentInputRow2 = _interopRequireDefault(_CurrentInputRow);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DisplayTable = function (_React$Component) {
	_inherits(DisplayTable, _React$Component);

	function DisplayTable(props) {
		_classCallCheck(this, DisplayTable);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(DisplayTable).call(this, props));

		_this.state = {
			currentFormula: ''
		};
		return _this;
	}

	_createClass(DisplayTable, [{
		key: 'refresh',
		value: function refresh() {
			this.setState({
				currentFormula: this.props.formula.getFormula()
			});
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'display-table' },
				this.state.currentFormula
			);
		}
	}]);

	return DisplayTable;
}(_react2.default.Component);

exports.default = DisplayTable;

},{"./CurrentInputRow.jsx":3,"react":undefined}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('muicss/react');

var _react4 = _interopRequireDefault(_react3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Button = _react4.default.Button;

var Key = function (_React$Component) {
	_inherits(Key, _React$Component);

	function Key() {
		_classCallCheck(this, Key);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Key).apply(this, arguments));
	}

	_createClass(Key, [{
		key: 'callInputHandler',
		value: function callInputHandler(event) {
			this.props.inputHandler(this.props.children);
		}
	}, {
		key: 'render',
		value: function render() {
			var inputHandler = this.props.inputHandler;
			var color = this.props.color ? this.props.color : 'dark';

			return _react2.default.createElement(
				Button,
				{
					className: 'key',
					color: color,
					onClick: this.callInputHandler.bind(this)
				},
				this.props.children
			);
		}
	}]);

	return Key;
}(_react2.default.Component);

exports.default = Key;

},{"muicss/react":undefined,"react":undefined}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Key = require('./Key.jsx');

var _Key2 = _interopRequireDefault(_Key);

var _KeypadNumberGrid = require('./KeypadNumberGrid.jsx');

var _KeypadNumberGrid2 = _interopRequireDefault(_KeypadNumberGrid);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Keypad = function (_React$Component) {
	_inherits(Keypad, _React$Component);

	function Keypad() {
		_classCallCheck(this, Keypad);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Keypad).apply(this, arguments));
	}

	_createClass(Keypad, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'keypad' },
				_react2.default.createElement(
					'div',
					{ className: 'key-row mui--clearfix' },
					_react2.default.createElement(
						'div',
						{ className: 'key-container' },
						_react2.default.createElement(
							_Key2.default,
							{
								color: 'primary',
								inputHandler: this.props.inputHandler
							},
							_react2.default.createElement('i', { className: 'fa fa-arrow-left' })
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'key-container' },
						_react2.default.createElement(
							_Key2.default,
							{
								color: 'primary',
								inputHandler: this.props.inputHandler
							},
							'/'
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'key-container' },
						_react2.default.createElement(
							_Key2.default,
							{
								color: 'primary',
								inputHandler: this.props.inputHandler
							},
							'*'
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'key-container' },
						_react2.default.createElement(
							_Key2.default,
							{
								color: 'primary',
								inputHandler: this.props.inputHandler
							},
							'-'
						)
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'key-row mui--clearfix' },
					_react2.default.createElement(
						'div',
						{ className: 'keypad-numbers pull-left' },
						_react2.default.createElement(_KeypadNumberGrid2.default, {
							inputHandler: this.props.inputHandler
						})
					),
					_react2.default.createElement(
						'div',
						{ className: 'key-container height-2 pull-right' },
						_react2.default.createElement(
							_Key2.default,
							{
								color: 'primary',
								inputHandler: this.props.inputHandler
							},
							'+'
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'key-container height-2 pull-right' },
						_react2.default.createElement(
							_Key2.default,
							{
								color: 'primary',
								inputHandler: this.props.inputHandler
							},
							'='
						)
					)
				)
			);
		}
	}]);

	return Keypad;
}(_react2.default.Component);

exports.default = Keypad;

},{"./Key.jsx":5,"./KeypadNumberGrid.jsx":7,"react":undefined}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Key = require('./Key.jsx');

var _Key2 = _interopRequireDefault(_Key);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var KeypadNumberGrid = function (_React$Component) {
	_inherits(KeypadNumberGrid, _React$Component);

	function KeypadNumberGrid() {
		_classCallCheck(this, KeypadNumberGrid);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(KeypadNumberGrid).apply(this, arguments));
	}

	_createClass(KeypadNumberGrid, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'keypad-number-grid' },
				_react2.default.createElement(
					'div',
					{ className: 'number-key-row mui--clearfix' },
					_react2.default.createElement(
						'div',
						{ className: 'key-container' },
						_react2.default.createElement(
							_Key2.default,
							{
								inputHandler: this.props.inputHandler
							},
							'7'
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'key-container' },
						_react2.default.createElement(
							_Key2.default,
							{
								inputHandler: this.props.inputHandler
							},
							'8'
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'key-container' },
						_react2.default.createElement(
							_Key2.default,
							{
								inputHandler: this.props.inputHandler
							},
							'9'
						)
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'number-key-row mui--clearfix' },
					_react2.default.createElement(
						'div',
						{ className: 'key-container' },
						_react2.default.createElement(
							_Key2.default,
							{
								inputHandler: this.props.inputHandler
							},
							'4'
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'key-container' },
						_react2.default.createElement(
							_Key2.default,
							{
								inputHandler: this.props.inputHandler
							},
							'5'
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'key-container' },
						_react2.default.createElement(
							_Key2.default,
							{
								inputHandler: this.props.inputHandler
							},
							'6'
						)
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'number-key-row mui--clearfix' },
					_react2.default.createElement(
						'div',
						{ className: 'key-container' },
						_react2.default.createElement(
							_Key2.default,
							{
								inputHandler: this.props.inputHandler
							},
							'1'
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'key-container' },
						_react2.default.createElement(
							_Key2.default,
							{
								inputHandler: this.props.inputHandler
							},
							'2'
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'key-container' },
						_react2.default.createElement(
							_Key2.default,
							{
								inputHandler: this.props.inputHandler
							},
							'3'
						)
					)
				),
				_react2.default.createElement(
					'div',
					{ className: 'number-key-row mui--clearfix' },
					_react2.default.createElement(
						'div',
						{ className: 'key-container width-2' },
						_react2.default.createElement(
							_Key2.default,
							{
								inputHandler: this.props.inputHandler
							},
							'0'
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'key-container' },
						_react2.default.createElement(
							_Key2.default,
							{
								inputHandler: this.props.inputHandler
							},
							'.'
						)
					)
				)
			);
		}
	}]);

	return KeypadNumberGrid;
}(_react2.default.Component);

exports.default = KeypadNumberGrid;

},{"./Key.jsx":5,"react":undefined}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Formula = function () {
	function Formula() {
		_classCallCheck(this, Formula);

		this.formula = "";
	}

	_createClass(Formula, [{
		key: "getFormula",
		value: function getFormula() {
			return this.formula;
		}
	}, {
		key: "updateFormula",
		value: function updateFormula(formula) {
			this.formula = formula;
		}
	}]);

	return Formula;
}();

exports.default = Formula;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJqc3hcXGFwcC5qc3giLCJqc3hcXGNvbXBvbmVudHNcXENhbGN1bGF0b3IuanN4IiwianN4XFxjb21wb25lbnRzXFxDdXJyZW50SW5wdXRSb3cuanN4IiwianN4XFxjb21wb25lbnRzXFxEaXNwbGF5VGFibGUuanN4IiwianN4XFxjb21wb25lbnRzXFxLZXkuanN4IiwianN4XFxjb21wb25lbnRzXFxLZXlwYWQuanN4IiwianN4XFxjb21wb25lbnRzXFxLZXlwYWROdW1iZXJHcmlkLmpzeCIsImpzeFxcbW9kZWxzXFxGb3JtdWxhLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFRTTtBQUNMLFVBREssYUFDTCxHQUFjO3dCQURULGVBQ1M7O0FBQ2IsT0FBSyxPQUFMLEdBQWUsdUJBQWYsQ0FEYTtFQUFkOztjQURLOzs4QkFJTyxPQUFPO0FBQ2xCLFFBQUssT0FBTCxDQUFhLGFBQWIsQ0FBMkIsS0FBM0IsRUFEa0I7QUFFbEIsUUFBSyxXQUFMLENBQWlCLGFBQWpCLEdBRmtCOzs7OzBCQUlYOzs7QUFDUCxzQkFBUyxNQUFULENBQ0M7QUFDQyxhQUFTLEtBQUssT0FBTDtBQUNULGtCQUFjLEtBQUssV0FBTCxDQUFpQixJQUFqQixDQUFzQixJQUF0QixDQUFkO0FBQ0EsU0FBSyxhQUFDLFVBQUQ7WUFBZ0IsTUFBSyxXQUFMLEdBQW1CLFVBQW5CO0tBQWhCO0lBSE4sQ0FERCxFQU1DLFNBQVMsY0FBVCxDQUF3QixXQUF4QixDQU5ELEVBRE87Ozs7UUFSSDs7O0FBcUJOLFNBQVMsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLFVBQVMsS0FBVCxFQUFnQjtBQUM3RCxLQUFJLGdCQUFnQixJQUFJLGFBQUosRUFBaEIsQ0FEeUQ7QUFFN0QsZUFBYyxLQUFkLEdBRjZEO0NBQWhCLENBQTlD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O09BREQ7TUFYRDtLQWxCRDtJQW1DQzs7T0FBSyxXQUFVLDhCQUFWLEVBQUw7S0FDQzs7UUFBSyxXQUFVLGVBQVYsRUFBTDtNQUNDOzs7QUFDQyxzQkFBYyxLQUFLLEtBQUwsQ0FBVyxZQUFYO1FBRGY7O09BREQ7TUFERDtLQU1DOztRQUFLLFdBQVUsZUFBVixFQUFMO01BQ0M7OztBQUNDLHNCQUFjLEtBQUssS0FBTCxDQUFXLFlBQVg7UUFEZjs7T0FERDtNQU5EO0tBV0M7O1FBQUssV0FBVSxlQUFWLEVBQUw7TUFDQzs7O0FBQ0Msc0JBQWMsS0FBSyxLQUFMLENBQVcsWUFBWDtRQURmOztPQUREO01BWEQ7S0FuQ0Q7SUFvREM7O09BQUssV0FBVSw4QkFBVixFQUFMO0tBQ0M7O1FBQUssV0FBVSx1QkFBVixFQUFMO01BQ0M7OztBQUNDLHNCQUFjLEtBQUssS0FBTCxDQUFXLFlBQVg7UUFEZjs7T0FERDtNQUREO0tBTUM7O1FBQUssV0FBVSxlQUFWLEVBQUw7TUFDQzs7O0FBQ0Msc0JBQWMsS0FBSyxLQUFMLENBQVcsWUFBWDtRQURmOztPQUREO01BTkQ7S0FwREQ7SUFERCxDQURROzs7O1FBREo7RUFBeUIsZ0JBQU0sU0FBTjs7a0JBd0VoQjs7O0FDOUVmOzs7Ozs7Ozs7O0lBR007QUFDTCxVQURLLE9BQ0wsR0FBYzt3QkFEVCxTQUNTOztBQUNiLE9BQUssT0FBTCxHQUFlLEVBQWYsQ0FEYTtFQUFkOztjQURLOzsrQkFJUTtBQUNaLFVBQU8sS0FBSyxPQUFMLENBREs7Ozs7Z0NBR0MsU0FBUztBQUN0QixRQUFLLE9BQUwsR0FBZSxPQUFmLENBRHNCOzs7O1FBUGxCOzs7a0JBWVMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0IENhbGN1bGF0b3IgZnJvbSAnLi9jb21wb25lbnRzL0NhbGN1bGF0b3IuanN4JztcclxuaW1wb3J0IEZvcm11bGEgZnJvbSAnLi9tb2RlbHMvRm9ybXVsYS5qc3gnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcclxuXHJcblxyXG5jbGFzcyBDYWxjdWxhdG9yQXBwIHtcclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHRoaXMuZm9ybXVsYSA9IG5ldyBGb3JtdWxhKCk7XHJcblx0fVxyXG5cdGhhbmRsZUlucHV0KHZhbHVlKSB7XHJcblx0XHR0aGlzLmZvcm11bGEudXBkYXRlRm9ybXVsYSh2YWx1ZSk7XHJcblx0XHR0aGlzLl9jYWxjdWxhdG9yLnVwZGF0ZURpc3BsYXkoKTtcclxuXHR9XHJcblx0c3RhcnQoKSB7XHJcblx0XHRSZWFjdERPTS5yZW5kZXIoXHJcblx0XHRcdDxDYWxjdWxhdG9yXHJcblx0XHRcdFx0Zm9ybXVsYT17dGhpcy5mb3JtdWxhfVxyXG5cdFx0XHRcdGlucHV0SGFuZGxlcj17dGhpcy5oYW5kbGVJbnB1dC5iaW5kKHRoaXMpfVxyXG5cdFx0XHRcdHJlZj17KGNhbGN1bGF0b3IpID0+IHRoaXMuX2NhbGN1bGF0b3IgPSBjYWxjdWxhdG9yfVxyXG5cdFx0XHQvPixcclxuXHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhaW5lcicpXHJcblx0XHQpO1xyXG5cdH1cclxufVxyXG5cclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbihldmVudCkge1xyXG5cdHZhciBjYWxjdWxhdG9yQXBwID0gbmV3IENhbGN1bGF0b3JBcHAoKTtcclxuXHRjYWxjdWxhdG9yQXBwLnN0YXJ0KCk7XHJcbn0pO1xyXG5cclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0IERpc3BsYXlUYWJsZSBmcm9tICcuL0Rpc3BsYXlUYWJsZS5qc3gnO1xyXG5pbXBvcnQgS2V5cGFkIGZyb20gJy4vS2V5cGFkLmpzeCc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5cclxuY2xhc3MgQ2FsY3VsYXRvciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblx0dXBkYXRlRGlzcGxheSgpIHtcclxuXHRcdHRoaXMuX2Rpc3BsYXlUYWJsZS5yZWZyZXNoKCk7XHJcblx0fVxyXG5cdHJlbmRlcigpIHtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2FsY3VsYXRvclwiPlxyXG5cdFx0XHRcdDxEaXNwbGF5VGFibGVcclxuXHRcdFx0XHRcdHVwZGF0ZUZvcm11bGE9e3RoaXMudXBkYXRlRm9ybXVsYX1cclxuXHRcdFx0XHRcdGZvcm11bGE9e3RoaXMucHJvcHMuZm9ybXVsYX1cclxuXHRcdFx0XHRcdHJlZj17KGRpc3BsYXlUYWJsZSkgPT4gdGhpcy5fZGlzcGxheVRhYmxlID0gZGlzcGxheVRhYmxlfVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdFx0PEtleXBhZFxyXG5cdFx0XHRcdFx0aW5wdXRIYW5kbGVyPXt0aGlzLnByb3BzLmlucHV0SGFuZGxlcn1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdCk7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYWxjdWxhdG9yOyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5cclxuY2xhc3MgQ3VycmVudElucHV0Um93IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEN1cnJlbnRJbnB1dFJvdzsiLCIndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQgQ3VycmVudElucHV0Um93IGZyb20gJy4vQ3VycmVudElucHV0Um93LmpzeCc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5cclxuY2xhc3MgRGlzcGxheVRhYmxlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG5cdFx0c3VwZXIocHJvcHMpO1xyXG5cdFx0dGhpcy5zdGF0ZSA9IHtcclxuXHRcdFx0Y3VycmVudEZvcm11bGE6ICcnLFxyXG5cdFx0fVxyXG5cdH1cclxuXHRyZWZyZXNoKCkge1xyXG5cdFx0dGhpcy5zZXRTdGF0ZSh7XHJcblx0XHRcdGN1cnJlbnRGb3JtdWxhOiB0aGlzLnByb3BzLmZvcm11bGEuZ2V0Rm9ybXVsYSgpLFxyXG5cdFx0fSk7XHJcblx0fVxyXG5cdHJlbmRlcigpIHtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZGlzcGxheS10YWJsZVwiPlxyXG5cdFx0XHRcdHt0aGlzLnN0YXRlLmN1cnJlbnRGb3JtdWxhfVxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdClcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERpc3BsYXlUYWJsZTsiLCIndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTXVpQ1NTIGZyb20gJ211aWNzcy9yZWFjdCc7XHJcblxyXG5cclxudmFyIEJ1dHRvbiA9IE11aUNTUy5CdXR0b247XHJcblxyXG5jbGFzcyBLZXkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cdGNhbGxJbnB1dEhhbmRsZXIoZXZlbnQpIHtcclxuXHRcdHRoaXMucHJvcHMuaW5wdXRIYW5kbGVyKHRoaXMucHJvcHMuY2hpbGRyZW4pXHJcblx0fVxyXG5cdHJlbmRlcigpIHtcclxuXHRcdHZhciBpbnB1dEhhbmRsZXIgPSB0aGlzLnByb3BzLmlucHV0SGFuZGxlcjtcclxuXHRcdHZhciBjb2xvciA9IHRoaXMucHJvcHMuY29sb3IgPyB0aGlzLnByb3BzLmNvbG9yIDogJ2RhcmsnO1xyXG5cdFx0XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8QnV0dG9uXHJcblx0XHRcdFx0Y2xhc3NOYW1lPVwia2V5XCJcclxuXHRcdFx0XHRjb2xvcj17Y29sb3J9XHJcblx0XHRcdFx0b25DbGljaz17dGhpcy5jYWxsSW5wdXRIYW5kbGVyLmJpbmQodGhpcyl9XHJcblx0XHRcdD5cclxuXHRcdFx0XHR7dGhpcy5wcm9wcy5jaGlsZHJlbn1cclxuXHRcdFx0PC9CdXR0b24+XHJcblx0XHQpXHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBLZXk7IiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0IEtleSBmcm9tICcuL0tleS5qc3gnO1xyXG5pbXBvcnQgS2V5cGFkTnVtYmVyR3JpZCBmcm9tICcuL0tleXBhZE51bWJlckdyaWQuanN4JztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcblxyXG5jbGFzcyBLZXlwYWQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuXHRyZW5kZXIoKSB7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImtleXBhZFwiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwia2V5LXJvdyBtdWktLWNsZWFyZml4XCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImtleS1jb250YWluZXJcIj5cclxuXHRcdFx0XHRcdFx0PEtleVxyXG5cdFx0XHRcdFx0XHRcdGNvbG9yPVwicHJpbWFyeVwiXHJcblx0XHRcdFx0XHRcdFx0aW5wdXRIYW5kbGVyPXt0aGlzLnByb3BzLmlucHV0SGFuZGxlcn1cclxuXHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdDxpIGNsYXNzTmFtZT1cImZhIGZhLWFycm93LWxlZnRcIj48L2k+XHJcblx0XHRcdFx0XHRcdDwvS2V5PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImtleS1jb250YWluZXJcIj5cclxuXHRcdFx0XHRcdFx0PEtleVxyXG5cdFx0XHRcdFx0XHRcdGNvbG9yPVwicHJpbWFyeVwiXHJcblx0XHRcdFx0XHRcdFx0aW5wdXRIYW5kbGVyPXt0aGlzLnByb3BzLmlucHV0SGFuZGxlcn1cclxuXHRcdFx0XHRcdFx0Pi88L0tleT5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJrZXktY29udGFpbmVyXCI+XHJcblx0XHRcdFx0XHRcdDxLZXlcclxuXHRcdFx0XHRcdFx0XHRjb2xvcj1cInByaW1hcnlcIlxyXG5cdFx0XHRcdFx0XHRcdGlucHV0SGFuZGxlcj17dGhpcy5wcm9wcy5pbnB1dEhhbmRsZXJ9XHJcblx0XHRcdFx0XHRcdD4qPC9LZXk+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImtleS1jb250YWluZXJcIj5cclxuXHRcdFx0XHRcdFx0PEtleVxyXG5cdFx0XHRcdFx0XHRcdGNvbG9yPVwicHJpbWFyeVwiXHJcblx0XHRcdFx0XHRcdFx0aW5wdXRIYW5kbGVyPXt0aGlzLnByb3BzLmlucHV0SGFuZGxlcn1cclxuXHRcdFx0XHRcdFx0Pi08L0tleT5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwia2V5LXJvdyBtdWktLWNsZWFyZml4XCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImtleXBhZC1udW1iZXJzIHB1bGwtbGVmdFwiPlxyXG5cdFx0XHRcdFx0XHQ8S2V5cGFkTnVtYmVyR3JpZFxyXG5cdFx0XHRcdFx0XHRcdGlucHV0SGFuZGxlcj17dGhpcy5wcm9wcy5pbnB1dEhhbmRsZXJ9XHJcblx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwia2V5LWNvbnRhaW5lciBoZWlnaHQtMiBwdWxsLXJpZ2h0XCI+XHJcblx0XHRcdFx0XHRcdDxLZXlcclxuXHRcdFx0XHRcdFx0XHRjb2xvcj1cInByaW1hcnlcIlxyXG5cdFx0XHRcdFx0XHRcdGlucHV0SGFuZGxlcj17dGhpcy5wcm9wcy5pbnB1dEhhbmRsZXJ9XHJcblx0XHRcdFx0XHRcdD4rPC9LZXk+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImtleS1jb250YWluZXIgaGVpZ2h0LTIgcHVsbC1yaWdodFwiPlxyXG5cdFx0XHRcdFx0XHQ8S2V5XHJcblx0XHRcdFx0XHRcdFx0Y29sb3I9XCJwcmltYXJ5XCJcclxuXHRcdFx0XHRcdFx0XHRpbnB1dEhhbmRsZXI9e3RoaXMucHJvcHMuaW5wdXRIYW5kbGVyfVxyXG5cdFx0XHRcdFx0XHQ+PTwvS2V5PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0KTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEtleXBhZDsiLCIndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQgS2V5IGZyb20gJy4vS2V5LmpzeCc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5cclxuY2xhc3MgS2V5cGFkTnVtYmVyR3JpZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblx0cmVuZGVyKCkge1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJrZXlwYWQtbnVtYmVyLWdyaWRcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm51bWJlci1rZXktcm93IG11aS0tY2xlYXJmaXhcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwia2V5LWNvbnRhaW5lclwiPlxyXG5cdFx0XHRcdFx0XHQ8S2V5XHJcblx0XHRcdFx0XHRcdFx0aW5wdXRIYW5kbGVyPXt0aGlzLnByb3BzLmlucHV0SGFuZGxlcn1cclxuXHRcdFx0XHRcdFx0Pjc8L0tleT5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJrZXktY29udGFpbmVyXCI+XHJcblx0XHRcdFx0XHRcdDxLZXlcclxuXHRcdFx0XHRcdFx0XHRpbnB1dEhhbmRsZXI9e3RoaXMucHJvcHMuaW5wdXRIYW5kbGVyfVxyXG5cdFx0XHRcdFx0XHQ+ODwvS2V5PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImtleS1jb250YWluZXJcIj5cclxuXHRcdFx0XHRcdFx0PEtleVxyXG5cdFx0XHRcdFx0XHRcdGlucHV0SGFuZGxlcj17dGhpcy5wcm9wcy5pbnB1dEhhbmRsZXJ9XHJcblx0XHRcdFx0XHRcdD45PC9LZXk+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm51bWJlci1rZXktcm93IG11aS0tY2xlYXJmaXhcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwia2V5LWNvbnRhaW5lclwiPlxyXG5cdFx0XHRcdFx0XHQ8S2V5XHJcblx0XHRcdFx0XHRcdFx0aW5wdXRIYW5kbGVyPXt0aGlzLnByb3BzLmlucHV0SGFuZGxlcn1cclxuXHRcdFx0XHRcdFx0PjQ8L0tleT5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJrZXktY29udGFpbmVyXCI+XHJcblx0XHRcdFx0XHRcdDxLZXlcclxuXHRcdFx0XHRcdFx0XHRpbnB1dEhhbmRsZXI9e3RoaXMucHJvcHMuaW5wdXRIYW5kbGVyfVxyXG5cdFx0XHRcdFx0XHQ+NTwvS2V5PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImtleS1jb250YWluZXJcIj5cclxuXHRcdFx0XHRcdFx0PEtleVxyXG5cdFx0XHRcdFx0XHRcdGlucHV0SGFuZGxlcj17dGhpcy5wcm9wcy5pbnB1dEhhbmRsZXJ9XHJcblx0XHRcdFx0XHRcdD42PC9LZXk+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm51bWJlci1rZXktcm93IG11aS0tY2xlYXJmaXhcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwia2V5LWNvbnRhaW5lclwiPlxyXG5cdFx0XHRcdFx0XHQ8S2V5XHJcblx0XHRcdFx0XHRcdFx0aW5wdXRIYW5kbGVyPXt0aGlzLnByb3BzLmlucHV0SGFuZGxlcn1cclxuXHRcdFx0XHRcdFx0PjE8L0tleT5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJrZXktY29udGFpbmVyXCI+XHJcblx0XHRcdFx0XHRcdDxLZXlcclxuXHRcdFx0XHRcdFx0XHRpbnB1dEhhbmRsZXI9e3RoaXMucHJvcHMuaW5wdXRIYW5kbGVyfVxyXG5cdFx0XHRcdFx0XHQ+MjwvS2V5PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImtleS1jb250YWluZXJcIj5cclxuXHRcdFx0XHRcdFx0PEtleVxyXG5cdFx0XHRcdFx0XHRcdGlucHV0SGFuZGxlcj17dGhpcy5wcm9wcy5pbnB1dEhhbmRsZXJ9XHJcblx0XHRcdFx0XHRcdD4zPC9LZXk+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm51bWJlci1rZXktcm93IG11aS0tY2xlYXJmaXhcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwia2V5LWNvbnRhaW5lciB3aWR0aC0yXCI+XHJcblx0XHRcdFx0XHRcdDxLZXlcclxuXHRcdFx0XHRcdFx0XHRpbnB1dEhhbmRsZXI9e3RoaXMucHJvcHMuaW5wdXRIYW5kbGVyfVxyXG5cdFx0XHRcdFx0XHQ+MDwvS2V5PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImtleS1jb250YWluZXJcIj5cclxuXHRcdFx0XHRcdFx0PEtleVxyXG5cdFx0XHRcdFx0XHRcdGlucHV0SGFuZGxlcj17dGhpcy5wcm9wcy5pbnB1dEhhbmRsZXJ9XHJcblx0XHRcdFx0XHRcdD4uPC9LZXk+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQpXHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBLZXlwYWROdW1iZXJHcmlkOyIsIid1c2Ugc3RyaWN0JztcclxuXHJcblxyXG5jbGFzcyBGb3JtdWxhIHtcclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHRoaXMuZm9ybXVsYSA9IFwiXCI7XHJcblx0fVxyXG5cdGdldEZvcm11bGEoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5mb3JtdWxhO1xyXG5cdH1cclxuXHR1cGRhdGVGb3JtdWxhKGZvcm11bGEpIHtcclxuXHRcdHRoaXMuZm9ybXVsYSA9IGZvcm11bGE7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb3JtdWxhOyJdfQ==
