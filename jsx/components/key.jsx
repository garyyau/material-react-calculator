'use strict';

var React = require('react');
var Button = require('muicss/react').Button;


var Key = React.createClass({
	render() {
		var keyValue = this.props.value;
		var inputHandler = this.props.inputHandler;
		var color = this.props.color ? this.props.color : 'primary';
		
		return (
			<Button
				className="key"
				color={color}
			>
				{this.props.children}
			</Button>
		)
	},
});

module.exports = Key;