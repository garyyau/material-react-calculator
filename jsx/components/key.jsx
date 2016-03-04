'use strict';

import React from 'react';
import MuiCSS from 'muicss/react';


var Button = MuiCSS.Button;

class Key extends React.Component {
	callInputHandler(event) {
		this.props.inputHandler(this.props.children)
	}
	render() {
		var inputHandler = this.props.inputHandler;
		var color = this.props.color ? this.props.color : 'dark';
		
		return (
			<Button
				className="key"
				color={color}
				onClick={this.callInputHandler.bind(this)}
			>
				{this.props.children}
			</Button>
		)
	}
}

export default Key;