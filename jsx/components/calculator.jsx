'use strict';

var Display = require('./display.jsx');
var Keypad = require('./keypad.jsx');
var React = require('react');


var Calculator = React.createClass({
	render() {
		return (
			<div className="calculator">
				<Display />
				<Keypad />
			</div>
		);
	}
});

module.exports = Calculator;