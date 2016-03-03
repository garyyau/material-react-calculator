'use strict';

var React = require('react');


var Key = React.createClass({
	render: function() {
		var keyValue = this.props.value;
		var inputHandler = this.props.inputHandler;
		
		return (
			<div className="key">
				{keyValue}
			</div>
		)
	},
});

module.exports = Key;