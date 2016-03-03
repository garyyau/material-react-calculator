'use strict';

var React = require('react');
var Key = require('./key.jsx');


var KeypadNumberGrid = React.createClass({
	render: function() {
		return (
			<div className="keypad-number-grid">
				<div className="number-key-row">
					<div className="key-container">
						<Key value="7" />
					</div>
					<div className="key-container">
						<Key value="8" />
					</div>
					<div className="key-container">
						<Key value="9" />
					</div>
				</div>
				<div className="number-key-row">
					<div className="key-container">
						<Key value="4" />
					</div>
					<div className="key-container">
						<Key value="5" />
					</div>
					<div className="key-container">
						<Key value="6" />
					</div>
				</div>
				<div className="number-key-row">
					<div className="key-container">
						<Key value="1" />
					</div>
					<div className="key-container">
						<Key value="2" />
					</div>
					<div className="key-container">
						<Key value="3" />
					</div>
				</div>
				<div className="number-key-row">
					<div className="key-container width-2">
						<Key value="0" />
					</div>
					<div className="key-container">
						<Key value="." />
					</div>
				</div>
			</div>
		)
	},
});

module.exports = KeypadNumberGrid;