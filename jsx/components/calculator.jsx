'use strict';

import DisplayTable from './DisplayTable.jsx';
import Keypad from './Keypad.jsx';
import React from 'react';


class Calculator extends React.Component {
	updateDisplay() {
		this._displayTable.refresh();
	}
	render() {
		return (
			<div className="calculator">
				<DisplayTable
					updateFormula={this.updateFormula}
					formula={this.props.formula}
					ref={(displayTable) => this._displayTable = displayTable}
				/>
				<Keypad
					inputHandler={this.props.inputHandler}
				/>
			</div>
		);
	}
}

export default Calculator;