'use strict';

var Key = require('./key.jsx');
var KeypadNumberGrid = require('./keypad-number-grid.jsx');
var React = require('react');


var Keypad = React.createClass({
	render() {
		return (
			<div className="keypad">
				<div className="key-row">
					<div className="key-container">
						<Key color="accent">
							<i className="fa fa-arrow-left"></i>
						</Key>
					</div>
					<div className="key-container">
						<Key color="accent">/</Key>
					</div>
					<div className="key-container">
						<Key color="accent">*</Key>
					</div>

					<div className="key-container">
						<Key color="accent">-</Key>
					</div>
				</div>
				<div className="key-row">
					<div className="keypad-numbers pull-left">
						<KeypadNumberGrid />
					</div>
					<div className="key-container height-2 pull-right">
						<Key color="accent">+</Key>
					</div>

					<div className="key-container height-2 pull-right">
						<Key color="accent">=</Key>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = Keypad;