import React, { Component } from 'react';
import {Header} from 'Components'
import {SideNavContainer} from 'Containers'
import {NavList} from "../MainContainer/MainContainer"

import {container, sideNav} from './HeaderContainer.sass';

class HeaderContainer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			sideNav: false
		}
	}

	toggleSideNav = () => this.setState({sideNav: !this.state.sideNav})
	
	render() {
		return (
			<div className={this.props.className}>
				<Header toggleVisibility={this.toggleSideNav}/>
				<SideNavContainer toggled={this.state.sideNav} toggleVisibility={this.toggleSideNav}>
					<NavList className={sideNav} toggleSideNav={this.toggleSideNav}/>
				</SideNavContainer>
			</div>
		)
	}
}

export default HeaderContainer;