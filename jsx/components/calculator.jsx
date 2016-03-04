'use strict';

import Keypad from './Keypad.jsx';
import React from 'react';
import WorkScreen from './WorkScreen.jsx';


class Calculator extends React.Component {
	updateFormula() {
		this._workScreen.refreshFormula();
	}
	updateValue(inputValue) {
		this._workScreen.refreshValue(inputValue);
	}
	render() {
		return (
			<div className="calculator">
				<div className="header">Material React Calculator</div>
				<WorkScreen
					formula={this.props.formula}
					ref={(workScreen) => this._workScreen = workScreen}
				/>
				<Keypad
					inputHandler={this.props.inputHandler}
				/>
			</div>
		);
	}
}

export default Calculator;