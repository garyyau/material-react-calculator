'use strict';

import React from 'react';


class ValueDisplay extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: '',
		}
	}
	append(inputValue) {
		var newValue = this.state.value + inputValue;
		this.setState({
			value: newValue,
		});
	}
	reset() {
		this.setState({
			value: '',
		});
	}
	render() {
		return (
			<div className="value-display-container">
				<div className="value-display">
					{this.state.value}
				</div>
			</div>
		)
	}
}

export default ValueDisplay;