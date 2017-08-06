import React, { Component } from 'react';
import styles from './WelcomeComponent.sass';

class WelcomeComponent extends Component {
	render() {
		return (
			<div className={this.props.className}>
				Welcome Successfully Rendered
			</div>
		)
	}
}

export default WelcomeComponent;