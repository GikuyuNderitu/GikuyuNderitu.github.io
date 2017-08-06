import React, { Component } from 'react';
import {Header} from 'Components'

import {container} from './HeaderContainer.sass';

class HeaderContainer extends Component {
	render() {
		return (
			<div className={this.props.className}>
				<Header />
			</div>
		)
	}
}

export default HeaderContainer;