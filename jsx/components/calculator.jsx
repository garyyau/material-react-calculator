'use strict';

var Keypad = require('./keypad.jsx');
var React = require('react');


var Calculator = React.createClass({
	render: function() {
		return (
			<div>
				<Keypad />
			</div>
		);
	}
});

module.exports = Calculator;