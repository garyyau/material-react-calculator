'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

var Calculator = require('./components/calculator.jsx');


class CalculatorApp {
	render() {
		ReactDOM.render(
			<Calculator />,
			document.getElementById('container')
		);
	}
}


document.addEventListener('DOMContentLoaded', function(event) {
	var calculatorApp = new CalculatorApp();
	calculatorApp.render();
});

