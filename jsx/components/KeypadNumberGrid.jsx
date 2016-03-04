'use strict';

import Key from './Key.jsx';
import React from 'react';


class KeypadNumberGrid extends React.Component {
	render() {
		return (
			<div className="keypad-number-grid">
				<div className="number-key-row mui--clearfix">
					<div className="key-container">
						<Key
							inputHandler={this.props.inputHandler}
						>7</Key>
					</div>
					<div className="key-container">
						<Key
							inputHandler={this.props.inputHandler}
						>8</Key>
					</div>
					<div className="key-container">
						<Key
							inputHandler={this.props.inputHandler}
						>9</Key>
					</div>
				</div>
				<div className="number-key-row mui--clearfix">
					<div className="key-container">
						<Key
							inputHandler={this.props.inputHandler}
						>4</Key>
					</div>
					<div className="key-container">
						<Key
							inputHandler={this.props.inputHandler}
						>5</Key>
					</div>
					<div className="key-container">
						<Key
							inputHandler={this.props.inputHandler}
						>6</Key>
					</div>
				</div>
				<div className="number-key-row mui--clearfix">
					<div className="key-container">
						<Key
							inputHandler={this.props.inputHandler}
						>1</Key>
					</div>
					<div className="key-container">
						<Key
							inputHandler={this.props.inputHandler}
						>2</Key>
					</div>
					<div className="key-container">
						<Key
							inputHandler={this.props.inputHandler}
						>3</Key>
					</div>
				</div>
				<div className="number-key-row mui--clearfix">
					<div className="key-container width-2">
						<Key
							inputHandler={this.props.inputHandler}
						>0</Key>
					</div>
					<div className="key-container">
						<Key
							inputHandler={this.props.inputHandler}
						>.</Key>
					</div>
				</div>
			</div>
		)
	}
}

export default KeypadNumberGrid;