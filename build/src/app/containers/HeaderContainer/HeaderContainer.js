import React, { Component } from 'react';
import {Header} from 'Components'
import {SideNavContainer} from 'Containers'

import {container} from './HeaderContainer.sass';

class HeaderContainer extends Component {
	toggleSideNav = () => this.setState({sideNav: !this.state.sideNav})
	render() {
		return (
			<div className={this.props.className}>
				<Header />
				<SideNavContainer />
			</div>
		)
	}
}

export default HeaderContainer;