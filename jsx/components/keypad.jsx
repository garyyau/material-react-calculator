'use strict';

var React = require('react');
var KeypadNumberGrid = require('./keypad-number-grid.jsx');
var Key = require('./key.jsx');


var Keypad = React.createClass({
	render: function() {
		return (
			<div className="keypad">
				<div className="key-row">
					<div className="key-container">
						<Key value="<-" />
					</div>
					<div className="key-container">
						<Key value="/" />
					</div>

					<div className="key-container">
						<Key value="*" />
					</div>

					<div className="key-container">
						<Key value="-" />
					</div>
				</div>
				<div className="key-row">
					<div className="keypad-numbers pull-left">
						<KeypadNumberGrid />
					</div>
					<div className="key-container height-2 pull-right">
						<Key value="+" />
					</div>

					<div className="key-container height-2 pull-right">
						<Key value="=" />
					</div>
				</div>
			</div>
		);
	}
});

module.exports = Keypad;