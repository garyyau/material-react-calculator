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
			this._calculator.updateFormula();

			this._calculator.updateValue(value);
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

},{"./components/Calculator.jsx":2,"./models/Formula.jsx":9,"react":undefined,"react-dom":undefined}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Keypad = require('./Keypad.jsx');

var _Keypad2 = _interopRequireDefault(_Keypad);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _WorkScreen = require('./WorkScreen.jsx');

var _WorkScreen2 = _interopRequireDefault(_WorkScreen);

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
		key: 'updateFormula',
		value: function updateFormula() {
			this._workScreen.refreshFormula();
		}
	}, {
		key: 'updateValue',
		value: function updateValue(inputValue) {
			this._workScreen.refreshValue(inputValue);
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			return _react2.default.createElement(
				'div',
				{ className: 'calculator' },
				_react2.default.createElement(
					'div',
					{ className: 'header' },
					'Material React Calculator'
				),
				_react2.default.createElement(_WorkScreen2.default, {
					formula: this.props.formula,
					ref: function ref(workScreen) {
						return _this2._workScreen = workScreen;
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

},{"./Keypad.jsx":5,"./WorkScreen.jsx":8,"react":undefined}],3:[function(require,module,exports){
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

var FormulaDisplay = function (_React$Component) {
	_inherits(FormulaDisplay, _React$Component);

	function FormulaDisplay(props) {
		_classCallCheck(this, FormulaDisplay);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(FormulaDisplay).call(this, props));

		_this.state = {
			text: ''
		};
		return _this;
	}

	_createClass(FormulaDisplay, [{
		key: 'refresh',
		value: function refresh(formulaString) {
			this.setState({
				text: formulaString
			});
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'formula-display' },
				this.state.text
			);
		}
	}]);

	return FormulaDisplay;
}(_react2.default.Component);

exports.default = FormulaDisplay;

},{"react":undefined}],4:[function(require,module,exports){
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

},{"muicss/react":undefined,"react":undefined}],5:[function(require,module,exports){
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

},{"./Key.jsx":4,"./KeypadNumberGrid.jsx":6,"react":undefined}],6:[function(require,module,exports){
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

},{"./Key.jsx":4,"react":undefined}],7:[function(require,module,exports){
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

var ValueDisplay = function (_React$Component) {
	_inherits(ValueDisplay, _React$Component);

	function ValueDisplay(props) {
		_classCallCheck(this, ValueDisplay);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ValueDisplay).call(this, props));

		_this.state = {
			value: ''
		};
		return _this;
	}

	_createClass(ValueDisplay, [{
		key: 'append',
		value: function append(inputValue) {
			var newValue = this.state.value + inputValue;
			this.setState({
				value: newValue
			});
		}
	}, {
		key: 'reset',
		value: function reset() {
			this.setState({
				value: ''
			});
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'value-display-container' },
				_react2.default.createElement(
					'div',
					{ className: 'value-display' },
					this.state.value
				)
			);
		}
	}]);

	return ValueDisplay;
}(_react2.default.Component);

exports.default = ValueDisplay;

},{"react":undefined}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _FormulaDisplay = require('./FormulaDisplay.jsx');

var _FormulaDisplay2 = _interopRequireDefault(_FormulaDisplay);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ValueDisplay = require('./ValueDisplay.jsx');

var _ValueDisplay2 = _interopRequireDefault(_ValueDisplay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WorkScreen = function (_React$Component) {
	_inherits(WorkScreen, _React$Component);

	function WorkScreen() {
		_classCallCheck(this, WorkScreen);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(WorkScreen).apply(this, arguments));
	}

	_createClass(WorkScreen, [{
		key: 'refreshFormula',
		value: function refreshFormula() {
			var formula = this.props.formula;
			var formulaString = formula.toString();

			this._formulaDisplay.refresh(formulaString);
		}
	}, {
		key: 'refreshValue',
		value: function refreshValue(inputValue) {
			this._valueDisplay.append(inputValue);
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			return _react2.default.createElement(
				'div',
				{ className: 'work-screen' },
				_react2.default.createElement(_FormulaDisplay2.default, {
					ref: function ref(formulaDisplay) {
						return _this2._formulaDisplay = formulaDisplay;
					}
				}),
				_react2.default.createElement(_ValueDisplay2.default, {
					ref: function ref(valueDisplay) {
						return _this2._valueDisplay = valueDisplay;
					}
				})
			);
		}
	}]);

	return WorkScreen;
}(_react2.default.Component);

exports.default = WorkScreen;

},{"./FormulaDisplay.jsx":3,"./ValueDisplay.jsx":7,"react":undefined}],9:[function(require,module,exports){
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
	}, {
		key: "toString",
		value: function toString() {
			return "2 + 3 + 5 + 10 * 2 + 1 + 3 + 5 + 10 * 2 + 1 + 3 + 5 + 10 * 2 + 1 + 3 + 5 + 10 * 2 + 1 + 3 + 5 + 10 * 2 + 1 + 3 + 5 + 10 * 2 + 1";
		}
	}]);

	return Formula;
}();

exports.default = Formula;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJqc3hcXGFwcC5qc3giLCJqc3hcXGNvbXBvbmVudHNcXENhbGN1bGF0b3IuanN4IiwianN4XFxjb21wb25lbnRzXFxGb3JtdWxhRGlzcGxheS5qc3giLCJqc3hcXGNvbXBvbmVudHNcXEtleS5qc3giLCJqc3hcXGNvbXBvbmVudHNcXEtleXBhZC5qc3giLCJqc3hcXGNvbXBvbmVudHNcXEtleXBhZE51bWJlckdyaWQuanN4IiwianN4XFxjb21wb25lbnRzXFxWYWx1ZURpc3BsYXkuanN4IiwianN4XFxjb21wb25lbnRzXFxXb3JrU2NyZWVuLmpzeCIsImpzeFxcbW9kZWxzXFxGb3JtdWxhLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFRTTtBQUNMLFVBREssYUFDTCxHQUFjO3dCQURULGVBQ1M7O0FBQ2IsT0FBSyxPQUFMLEdBQWUsdUJBQWYsQ0FEYTtFQUFkOztjQURLOzs4QkFJTyxPQUFPO0FBQ2xCLFFBQUssT0FBTCxDQUFhLGFBQWIsQ0FBMkIsS0FBM0IsRUFEa0I7QUFFbEIsUUFBSyxXQUFMLENBQWlCLGFBQWpCLEdBRmtCOztBQUlsQixRQUFLLFdBQUwsQ0FBaUIsV0FBakIsQ0FBNkIsS0FBN0IsRUFKa0I7Ozs7MEJBTVg7OztBQUNQLHNCQUFTLE1BQVQsQ0FDQztBQUNDLGFBQVMsS0FBSyxPQUFMO0FBQ1Qsa0JBQWMsS0FBSyxXQUFMLENBQWlCLElBQWpCLENBQXNCLElBQXRCLENBQWQ7QUFDQSxTQUFLLGFBQUMsVUFBRDtZQUFnQixNQUFLLFdBQUwsR0FBbUIsVUFBbkI7S0FBaEI7SUFITixDQURELEVBTUMsU0FBUyxjQUFULENBQXdCLFdBQXhCLENBTkQsRUFETzs7OztRQVZIOzs7QUF1Qk4sU0FBUyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsVUFBUyxLQUFU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RCxFQURPOzs7OzJCQUtDO0FBQ1IsVUFDQzs7TUFBSyxXQUFVLHlCQUFWLEVBQUw7SUFDQzs7T0FBSyxXQUFVLGVBQVYsRUFBTDtLQUNFLEtBQUssS0FBTCxDQUFXLEtBQVg7S0FGSDtJQURELENBRFE7Ozs7UUFsQko7RUFBcUIsZ0JBQU0sU0FBTjs7a0JBNkJaOzs7QUNsQ2Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFPTTs7Ozs7Ozs7Ozs7bUNBQ1k7QUFDaEIsT0FBSSxVQUFVLEtBQUssS0FBTCxDQUFXLE9BQVgsQ0FERTtBQUVoQixPQUFJLGdCQUFnQixRQUFRLFFBQVIsRUFBaEIsQ0FGWTs7QUFJaEIsUUFBSyxlQUFMLENBQXFCLE9BQXJCLENBQTZCLGFBQTdCLEVBSmdCOzs7OytCQU1KLFlBQVk7QUFDeEIsUUFBSyxhQUFMLENBQW1CLE1BQW5CLENBQTBCLFVBQTFCLEVBRHdCOzs7OzJCQUdoQjs7O0FBQ1IsVUFDQzs7TUFBSyxXQUFVLGFBQVYsRUFBTDtJQUNDO0FBQ0MsVUFBSyxhQUFDLGNBQUQ7YUFBb0IsT0FBSyxlQUFMLEdBQXVCLGNBQXZCO01BQXBCO0tBRE4sQ0FERDtJQUlDO0FBQ0MsVUFBSyxhQUFDLFlBQUQ7YUFBa0IsT0FBSyxhQUFMLEdBQXFCLFlBQXJCO01BQWxCO0tBRE4sQ0FKRDtJQURELENBRFE7Ozs7UUFWSjtFQUFtQixnQkFBTSxTQUFOOztrQkF3QlY7OztBQy9CZjs7Ozs7Ozs7OztJQUdNO0FBQ0wsVUFESyxPQUNMLEdBQWM7d0JBRFQsU0FDUzs7QUFDYixPQUFLLE9BQUwsR0FBZSxFQUFmLENBRGE7RUFBZDs7Y0FESzs7K0JBSVE7QUFDWixVQUFPLEtBQUssT0FBTCxDQURLOzs7O2dDQUdDLFNBQVM7QUFDdEIsUUFBSyxPQUFMLEdBQWUsT0FBZixDQURzQjs7Ozs2QkFHWjtBQUNWLFVBQU8saUlBQVAsQ0FEVTs7OztRQVZOOzs7a0JBZVMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0IENhbGN1bGF0b3IgZnJvbSAnLi9jb21wb25lbnRzL0NhbGN1bGF0b3IuanN4JztcclxuaW1wb3J0IEZvcm11bGEgZnJvbSAnLi9tb2RlbHMvRm9ybXVsYS5qc3gnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcclxuXHJcblxyXG5jbGFzcyBDYWxjdWxhdG9yQXBwIHtcclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHRoaXMuZm9ybXVsYSA9IG5ldyBGb3JtdWxhKCk7XHJcblx0fVxyXG5cdGhhbmRsZUlucHV0KHZhbHVlKSB7XHJcblx0XHR0aGlzLmZvcm11bGEudXBkYXRlRm9ybXVsYSh2YWx1ZSk7XHJcblx0XHR0aGlzLl9jYWxjdWxhdG9yLnVwZGF0ZUZvcm11bGEoKTtcclxuXHJcblx0XHR0aGlzLl9jYWxjdWxhdG9yLnVwZGF0ZVZhbHVlKHZhbHVlKTtcclxuXHR9XHJcblx0c3RhcnQoKSB7XHJcblx0XHRSZWFjdERPTS5yZW5kZXIoXHJcblx0XHRcdDxDYWxjdWxhdG9yXHJcblx0XHRcdFx0Zm9ybXVsYT17dGhpcy5mb3JtdWxhfVxyXG5cdFx0XHRcdGlucHV0SGFuZGxlcj17dGhpcy5oYW5kbGVJbnB1dC5iaW5kKHRoaXMpfVxyXG5cdFx0XHRcdHJlZj17KGNhbGN1bGF0b3IpID0+IHRoaXMuX2NhbGN1bGF0b3IgPSBjYWxjdWxhdG9yfVxyXG5cdFx0XHQvPixcclxuXHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhaW5lcicpXHJcblx0XHQpO1xyXG5cdH1cclxufVxyXG5cclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbihldmVudCkge1xyXG5cdHZhciBjYWxjdWxhdG9yQXBwID0gbmV3IENhbGN1bGF0b3JBcHAoKTtcclxuXHRjYWxjdWxhdG9yQXBwLnN0YXJ0KCk7XHJcbn0pO1xyXG5cclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0IEtleXBhZCBmcm9tICcuL0tleXBhZC5qc3gnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgV29ya1NjcmVlbiBmcm9tICcuL1dvcmtTY3JlZW4uanN4JztcclxuXHJcblxyXG5jbGFzcyBDYWxjdWxhdG9yIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHR1cGRhdGVGb3JtdWxhKCkge1xyXG5cdFx0dGhpcy5fd29ya1NjcmVlbi5yZWZyZXNoRm9ybXVsYSgpO1xyXG5cdH1cclxuXHR1cGRhdGVWYWx1ZShpbnB1dFZhbHVlKSB7XHJcblx0XHR0aGlzLl93b3JrU2NyZWVuLnJlZnJlc2hWYWx1ZShpbnB1dFZhbHVlKTtcclxuXHR9XHJcblx0cmVuZGVyKCkge1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjYWxjdWxhdG9yXCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5NYXRlcmlhbCBSZWFjdCBDYWxjdWxhdG9yPC9kaXY+XHJcblx0XHRcdFx0PFdvcmtTY3JlZW5cclxuXHRcdFx0XHRcdGZvcm11bGE9e3RoaXMucHJvcHMuZm9ybXVsYX1cclxuXHRcdFx0XHRcdHJlZj17KHdvcmtTY3JlZW4pID0+IHRoaXMuX3dvcmtTY3JlZW4gPSB3b3JrU2NyZWVufVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdFx0PEtleXBhZFxyXG5cdFx0XHRcdFx0aW5wdXRIYW5kbGVyPXt0aGlzLnByb3BzLmlucHV0SGFuZGxlcn1cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdCk7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYWxjdWxhdG9yOyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5cclxuY2xhc3MgRm9ybXVsYURpc3BsYXkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcblx0XHRzdXBlcihwcm9wcyk7XHJcblx0XHR0aGlzLnN0YXRlID0ge1xyXG5cdFx0XHR0ZXh0OiAnJyxcclxuXHRcdH1cclxuXHR9XHJcblx0cmVmcmVzaChmb3JtdWxhU3RyaW5nKSB7XHJcblx0XHR0aGlzLnNldFN0YXRlKHtcclxuXHRcdFx0dGV4dDogZm9ybXVsYVN0cmluZyxcclxuXHRcdH0pO1xyXG5cdH1cclxuXHRyZW5kZXIoKSB7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZvcm11bGEtZGlzcGxheVwiPlxyXG5cdFx0XHRcdHt0aGlzLnN0YXRlLnRleHR9XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0KVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9ybXVsYURpc3BsYXk7IiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IE11aUNTUyBmcm9tICdtdWljc3MvcmVhY3QnO1xyXG5cclxuXHJcbnZhciBCdXR0b24gPSBNdWlDU1MuQnV0dG9uO1xyXG5cclxuY2xhc3MgS2V5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHRjYWxsSW5wdXRIYW5kbGVyKGV2ZW50KSB7XHJcblx0XHR0aGlzLnByb3BzLmlucHV0SGFuZGxlcih0aGlzLnByb3BzLmNoaWxkcmVuKVxyXG5cdH1cclxuXHRyZW5kZXIoKSB7XHJcblx0XHR2YXIgaW5wdXRIYW5kbGVyID0gdGhpcy5wcm9wcy5pbnB1dEhhbmRsZXI7XHJcblx0XHR2YXIgY29sb3IgPSB0aGlzLnByb3BzLmNvbG9yID8gdGhpcy5wcm9wcy5jb2xvciA6ICdkYXJrJztcclxuXHRcdFxyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PEJ1dHRvblxyXG5cdFx0XHRcdGNsYXNzTmFtZT1cImtleVwiXHJcblx0XHRcdFx0Y29sb3I9e2NvbG9yfVxyXG5cdFx0XHRcdG9uQ2xpY2s9e3RoaXMuY2FsbElucHV0SGFuZGxlci5iaW5kKHRoaXMpfVxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0e3RoaXMucHJvcHMuY2hpbGRyZW59XHJcblx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0KVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgS2V5OyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmltcG9ydCBLZXkgZnJvbSAnLi9LZXkuanN4JztcclxuaW1wb3J0IEtleXBhZE51bWJlckdyaWQgZnJvbSAnLi9LZXlwYWROdW1iZXJHcmlkLmpzeCc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5cclxuY2xhc3MgS2V5cGFkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcblx0cmVuZGVyKCkge1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJrZXlwYWRcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImtleS1yb3cgbXVpLS1jbGVhcmZpeFwiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJrZXktY29udGFpbmVyXCI+XHJcblx0XHRcdFx0XHRcdDxLZXlcclxuXHRcdFx0XHRcdFx0XHRjb2xvcj1cInByaW1hcnlcIlxyXG5cdFx0XHRcdFx0XHRcdGlucHV0SGFuZGxlcj17dGhpcy5wcm9wcy5pbnB1dEhhbmRsZXJ9XHJcblx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9XCJmYSBmYS1hcnJvdy1sZWZ0XCI+PC9pPlxyXG5cdFx0XHRcdFx0XHQ8L0tleT5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJrZXktY29udGFpbmVyXCI+XHJcblx0XHRcdFx0XHRcdDxLZXlcclxuXHRcdFx0XHRcdFx0XHRjb2xvcj1cInByaW1hcnlcIlxyXG5cdFx0XHRcdFx0XHRcdGlucHV0SGFuZGxlcj17dGhpcy5wcm9wcy5pbnB1dEhhbmRsZXJ9XHJcblx0XHRcdFx0XHRcdD4vPC9LZXk+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwia2V5LWNvbnRhaW5lclwiPlxyXG5cdFx0XHRcdFx0XHQ8S2V5XHJcblx0XHRcdFx0XHRcdFx0Y29sb3I9XCJwcmltYXJ5XCJcclxuXHRcdFx0XHRcdFx0XHRpbnB1dEhhbmRsZXI9e3RoaXMucHJvcHMuaW5wdXRIYW5kbGVyfVxyXG5cdFx0XHRcdFx0XHQ+KjwvS2V5PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJrZXktY29udGFpbmVyXCI+XHJcblx0XHRcdFx0XHRcdDxLZXlcclxuXHRcdFx0XHRcdFx0XHRjb2xvcj1cInByaW1hcnlcIlxyXG5cdFx0XHRcdFx0XHRcdGlucHV0SGFuZGxlcj17dGhpcy5wcm9wcy5pbnB1dEhhbmRsZXJ9XHJcblx0XHRcdFx0XHRcdD4tPC9LZXk+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImtleS1yb3cgbXVpLS1jbGVhcmZpeFwiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJrZXlwYWQtbnVtYmVycyBwdWxsLWxlZnRcIj5cclxuXHRcdFx0XHRcdFx0PEtleXBhZE51bWJlckdyaWRcclxuXHRcdFx0XHRcdFx0XHRpbnB1dEhhbmRsZXI9e3RoaXMucHJvcHMuaW5wdXRIYW5kbGVyfVxyXG5cdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImtleS1jb250YWluZXIgaGVpZ2h0LTIgcHVsbC1yaWdodFwiPlxyXG5cdFx0XHRcdFx0XHQ8S2V5XHJcblx0XHRcdFx0XHRcdFx0Y29sb3I9XCJwcmltYXJ5XCJcclxuXHRcdFx0XHRcdFx0XHRpbnB1dEhhbmRsZXI9e3RoaXMucHJvcHMuaW5wdXRIYW5kbGVyfVxyXG5cdFx0XHRcdFx0XHQ+KzwvS2V5PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJrZXktY29udGFpbmVyIGhlaWdodC0yIHB1bGwtcmlnaHRcIj5cclxuXHRcdFx0XHRcdFx0PEtleVxyXG5cdFx0XHRcdFx0XHRcdGNvbG9yPVwicHJpbWFyeVwiXHJcblx0XHRcdFx0XHRcdFx0aW5wdXRIYW5kbGVyPXt0aGlzLnByb3BzLmlucHV0SGFuZGxlcn1cclxuXHRcdFx0XHRcdFx0Pj08L0tleT5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdCk7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBLZXlwYWQ7IiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaW1wb3J0IEtleSBmcm9tICcuL0tleS5qc3gnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuXHJcbmNsYXNzIEtleXBhZE51bWJlckdyaWQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cdHJlbmRlcigpIHtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwia2V5cGFkLW51bWJlci1ncmlkXCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJudW1iZXIta2V5LXJvdyBtdWktLWNsZWFyZml4XCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImtleS1jb250YWluZXJcIj5cclxuXHRcdFx0XHRcdFx0PEtleVxyXG5cdFx0XHRcdFx0XHRcdGlucHV0SGFuZGxlcj17dGhpcy5wcm9wcy5pbnB1dEhhbmRsZXJ9XHJcblx0XHRcdFx0XHRcdD43PC9LZXk+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwia2V5LWNvbnRhaW5lclwiPlxyXG5cdFx0XHRcdFx0XHQ8S2V5XHJcblx0XHRcdFx0XHRcdFx0aW5wdXRIYW5kbGVyPXt0aGlzLnByb3BzLmlucHV0SGFuZGxlcn1cclxuXHRcdFx0XHRcdFx0Pjg8L0tleT5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJrZXktY29udGFpbmVyXCI+XHJcblx0XHRcdFx0XHRcdDxLZXlcclxuXHRcdFx0XHRcdFx0XHRpbnB1dEhhbmRsZXI9e3RoaXMucHJvcHMuaW5wdXRIYW5kbGVyfVxyXG5cdFx0XHRcdFx0XHQ+OTwvS2V5PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJudW1iZXIta2V5LXJvdyBtdWktLWNsZWFyZml4XCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImtleS1jb250YWluZXJcIj5cclxuXHRcdFx0XHRcdFx0PEtleVxyXG5cdFx0XHRcdFx0XHRcdGlucHV0SGFuZGxlcj17dGhpcy5wcm9wcy5pbnB1dEhhbmRsZXJ9XHJcblx0XHRcdFx0XHRcdD40PC9LZXk+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwia2V5LWNvbnRhaW5lclwiPlxyXG5cdFx0XHRcdFx0XHQ8S2V5XHJcblx0XHRcdFx0XHRcdFx0aW5wdXRIYW5kbGVyPXt0aGlzLnByb3BzLmlucHV0SGFuZGxlcn1cclxuXHRcdFx0XHRcdFx0PjU8L0tleT5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJrZXktY29udGFpbmVyXCI+XHJcblx0XHRcdFx0XHRcdDxLZXlcclxuXHRcdFx0XHRcdFx0XHRpbnB1dEhhbmRsZXI9e3RoaXMucHJvcHMuaW5wdXRIYW5kbGVyfVxyXG5cdFx0XHRcdFx0XHQ+NjwvS2V5PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJudW1iZXIta2V5LXJvdyBtdWktLWNsZWFyZml4XCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImtleS1jb250YWluZXJcIj5cclxuXHRcdFx0XHRcdFx0PEtleVxyXG5cdFx0XHRcdFx0XHRcdGlucHV0SGFuZGxlcj17dGhpcy5wcm9wcy5pbnB1dEhhbmRsZXJ9XHJcblx0XHRcdFx0XHRcdD4xPC9LZXk+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwia2V5LWNvbnRhaW5lclwiPlxyXG5cdFx0XHRcdFx0XHQ8S2V5XHJcblx0XHRcdFx0XHRcdFx0aW5wdXRIYW5kbGVyPXt0aGlzLnByb3BzLmlucHV0SGFuZGxlcn1cclxuXHRcdFx0XHRcdFx0PjI8L0tleT5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJrZXktY29udGFpbmVyXCI+XHJcblx0XHRcdFx0XHRcdDxLZXlcclxuXHRcdFx0XHRcdFx0XHRpbnB1dEhhbmRsZXI9e3RoaXMucHJvcHMuaW5wdXRIYW5kbGVyfVxyXG5cdFx0XHRcdFx0XHQ+MzwvS2V5PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJudW1iZXIta2V5LXJvdyBtdWktLWNsZWFyZml4XCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImtleS1jb250YWluZXIgd2lkdGgtMlwiPlxyXG5cdFx0XHRcdFx0XHQ8S2V5XHJcblx0XHRcdFx0XHRcdFx0aW5wdXRIYW5kbGVyPXt0aGlzLnByb3BzLmlucHV0SGFuZGxlcn1cclxuXHRcdFx0XHRcdFx0PjA8L0tleT5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJrZXktY29udGFpbmVyXCI+XHJcblx0XHRcdFx0XHRcdDxLZXlcclxuXHRcdFx0XHRcdFx0XHRpbnB1dEhhbmRsZXI9e3RoaXMucHJvcHMuaW5wdXRIYW5kbGVyfVxyXG5cdFx0XHRcdFx0XHQ+LjwvS2V5PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0KVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgS2V5cGFkTnVtYmVyR3JpZDsiLCIndXNlIHN0cmljdCc7XHJcblxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuXHJcbmNsYXNzIFZhbHVlRGlzcGxheSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcclxuXHRcdHN1cGVyKHByb3BzKTtcclxuXHRcdHRoaXMuc3RhdGUgPSB7XHJcblx0XHRcdHZhbHVlOiAnJyxcclxuXHRcdH1cclxuXHR9XHJcblx0YXBwZW5kKGlucHV0VmFsdWUpIHtcclxuXHRcdHZhciBuZXdWYWx1ZSA9IHRoaXMuc3RhdGUudmFsdWUgKyBpbnB1dFZhbHVlO1xyXG5cdFx0dGhpcy5zZXRTdGF0ZSh7XHJcblx0XHRcdHZhbHVlOiBuZXdWYWx1ZSxcclxuXHRcdH0pO1xyXG5cdH1cclxuXHRyZXNldCgpIHtcclxuXHRcdHRoaXMuc2V0U3RhdGUoe1xyXG5cdFx0XHR2YWx1ZTogJycsXHJcblx0XHR9KTtcclxuXHR9XHJcblx0cmVuZGVyKCkge1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ2YWx1ZS1kaXNwbGF5LWNvbnRhaW5lclwiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidmFsdWUtZGlzcGxheVwiPlxyXG5cdFx0XHRcdFx0e3RoaXMuc3RhdGUudmFsdWV9XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0KVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVmFsdWVEaXNwbGF5OyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmltcG9ydCBGb3JtdWxhRGlzcGxheSBmcm9tICcuL0Zvcm11bGFEaXNwbGF5LmpzeCc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBWYWx1ZURpc3BsYXkgZnJvbSAnLi9WYWx1ZURpc3BsYXkuanN4JztcclxuXHJcblxyXG5jbGFzcyBXb3JrU2NyZWVuIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHRyZWZyZXNoRm9ybXVsYSgpIHtcclxuXHRcdHZhciBmb3JtdWxhID0gdGhpcy5wcm9wcy5mb3JtdWxhO1xyXG5cdFx0dmFyIGZvcm11bGFTdHJpbmcgPSBmb3JtdWxhLnRvU3RyaW5nKCk7XHJcblxyXG5cdFx0dGhpcy5fZm9ybXVsYURpc3BsYXkucmVmcmVzaChmb3JtdWxhU3RyaW5nKTtcclxuXHR9XHJcblx0cmVmcmVzaFZhbHVlKGlucHV0VmFsdWUpIHtcclxuXHRcdHRoaXMuX3ZhbHVlRGlzcGxheS5hcHBlbmQoaW5wdXRWYWx1ZSk7XHJcblx0fVxyXG5cdHJlbmRlcigpIHtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwid29yay1zY3JlZW5cIj5cclxuXHRcdFx0XHQ8Rm9ybXVsYURpc3BsYXlcclxuXHRcdFx0XHRcdHJlZj17KGZvcm11bGFEaXNwbGF5KSA9PiB0aGlzLl9mb3JtdWxhRGlzcGxheSA9IGZvcm11bGFEaXNwbGF5fVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdFx0PFZhbHVlRGlzcGxheVxyXG5cdFx0XHRcdFx0cmVmPXsodmFsdWVEaXNwbGF5KSA9PiB0aGlzLl92YWx1ZURpc3BsYXkgPSB2YWx1ZURpc3BsYXl9XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQpXHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXb3JrU2NyZWVuOyIsIid1c2Ugc3RyaWN0JztcclxuXHJcblxyXG5jbGFzcyBGb3JtdWxhIHtcclxuXHRjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHRoaXMuZm9ybXVsYSA9IFwiXCI7XHJcblx0fVxyXG5cdGdldEZvcm11bGEoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5mb3JtdWxhO1xyXG5cdH1cclxuXHR1cGRhdGVGb3JtdWxhKGZvcm11bGEpIHtcclxuXHRcdHRoaXMuZm9ybXVsYSA9IGZvcm11bGE7XHJcblx0fVxyXG5cdHRvU3RyaW5nKCkge1xyXG5cdFx0cmV0dXJuIFwiMiArIDMgKyA1ICsgMTAgKiAyICsgMSArIDMgKyA1ICsgMTAgKiAyICsgMSArIDMgKyA1ICsgMTAgKiAyICsgMSArIDMgKyA1ICsgMTAgKiAyICsgMSArIDMgKyA1ICsgMTAgKiAyICsgMSArIDMgKyA1ICsgMTAgKiAyICsgMVwiO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9ybXVsYTsiXX0=
