'use strict';

import React from 'react';


class FormulaDisplay extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			text: '',
		}
	}
	refresh(formulaString) {
		this.setState({
			text: formulaString,
		});
	}
	render() {
		return (
			<div className="formula-display">
				{this.state.text}
			</div>
		)
	}
}

export default FormulaDisplay;