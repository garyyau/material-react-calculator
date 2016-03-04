'use strict';

import CurrentInputRow from './CurrentInputRow.jsx';
import React from 'react';


class DisplayTable extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentFormula: '',
		}
	}
	refresh() {
		this.setState({
			currentFormula: this.props.formula.getFormula(),
		});
	}
	render() {
		return (
			<div className="display-table">
				{this.state.currentFormula}
			</div>
		)
	}
}

export default DisplayTable;