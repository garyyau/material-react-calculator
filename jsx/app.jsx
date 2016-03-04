'use strict';

import Calculator from './components/Calculator.jsx';
import Formula from './models/Formula.jsx';
import React from 'react';
import ReactDOM from 'react-dom';


class CalculatorApp {
	constructor() {
		this.formula = new Formula();
	}
	handleInput(value) {
		this.formula.updateFormula(value);
		this._calculator.updateDisplay();
	}
	start() {
		ReactDOM.render(
			<Calculator
				formula={this.formula}
				inputHandler={this.handleInput.bind(this)}
				ref={(calculator) => this._calculator = calculator}
			/>,
			document.getElementById('container')
		);
	}
}


document.addEventListener('DOMContentLoaded', function(event) {
	var calculatorApp = new CalculatorApp();
	calculatorApp.start();
});

