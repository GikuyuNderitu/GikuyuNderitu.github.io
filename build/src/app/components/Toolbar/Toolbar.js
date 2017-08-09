import React, { Component } from 'react';
import {container, text} from './Toolbar.sass';

class Toolbar extends Component {
	render() {
		const upperClass = this.props.className || '';
		return (
			<div className={`${upperClass} ${container}`}>
				{this.props.children}
			</div>
		)
	}
}

export default Toolbar;