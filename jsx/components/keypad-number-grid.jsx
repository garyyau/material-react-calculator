'use strict';

var Key = require('./key.jsx');
var React = require('react');


var KeypadNumberGrid = React.createClass({
	render() {
		return (
			<div className="keypad-number-grid">
				<div className="number-key-row">
					<div className="key-container">
						<Key>7</Key>
					</div>
					<div className="key-container">
						<Key>8</Key>
					</div>
					<div className="key-container">
						<Key>9</Key>
					</div>
				</div>
				<div className="number-key-row">
					<div className="key-container">
						<Key>4</Key>
					</div>
					<div className="key-container">
						<Key>5</Key>
					</div>
					<div className="key-container">
						<Key>6</Key>
					</div>
				</div>
				<div className="number-key-row">
					<div className="key-container">
						<Key>1</Key>
					</div>
					<div className="key-container">
						<Key>2</Key>
					</div>
					<div className="key-container">
						<Key>3</Key>
					</div>
				</div>
				<div className="number-key-row">
					<div className="key-container width-2">
						<Key>0</Key>
					</div>
					<div className="key-container">
						<Key>.</Key>
					</div>
				</div>
			</div>
		)
	},
});

module.exports = KeypadNumberGrid;