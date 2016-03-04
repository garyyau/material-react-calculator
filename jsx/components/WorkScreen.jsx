'use strict';

import FormulaDisplay from './FormulaDisplay.jsx';
import React from 'react';
import ValueDisplay from './ValueDisplay.jsx';


class WorkScreen extends React.Component {
	refreshFormula() {
		var formula = this.props.formula;
		var formulaString = formula.toString();

		this._formulaDisplay.refresh(formulaString);
	}
	refreshValue(inputValue) {
		this._valueDisplay.append(inputValue);
	}
	render() {
		return (
			<div className="work-screen">
				<FormulaDisplay
					ref={(formulaDisplay) => this._formulaDisplay = formulaDisplay}
				/>
				<ValueDisplay
					ref={(valueDisplay) => this._valueDisplay = valueDisplay}
				/>
			</div>
		)
	}
}

export default WorkScreen;