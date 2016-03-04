'use strict';

var Calculator = require('./components/calculator.jsx');
var React = require('react');
var ReactDOM = require('react-dom');


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

