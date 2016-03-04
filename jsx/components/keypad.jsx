'use strict';

import Key from './Key.jsx';
import KeypadNumberGrid from './KeypadNumberGrid.jsx';
import React from 'react';


class Keypad extends React.Component {

	render() {
		return (
			<div className="keypad">
				<div className="key-row mui--clearfix">
					<div className="key-container">
						<Key
							color="primary"
							inputHandler={this.props.inputHandler}
						>
							<i className="fa fa-arrow-left"></i>
						</Key>
					</div>
					<div className="key-container">
						<Key
							color="primary"
							inputHandler={this.props.inputHandler}
						>/</Key>
					</div>
					<div className="key-container">
						<Key
							color="primary"
							inputHandler={this.props.inputHandler}
						>*</Key>
					</div>

					<div className="key-container">
						<Key
							color="primary"
							inputHandler={this.props.inputHandler}
						>-</Key>
					</div>
				</div>
				<div className="key-row mui--clearfix">
					<div className="keypad-numbers pull-left">
						<KeypadNumberGrid
							inputHandler={this.props.inputHandler}
						/>
					</div>
					<div className="key-container height-2 pull-right">
						<Key
							color="primary"
							inputHandler={this.props.inputHandler}
						>+</Key>
					</div>

					<div className="key-container height-2 pull-right">
						<Key
							color="primary"
							inputHandler={this.props.inputHandler}
						>=</Key>
					</div>
				</div>
			</div>
		);
	}
}

export default Keypad;