import React, { Component } from 'react';
import {container, sideNav, active} from './SideNavContainer.sass';

import {NavList} from 'Containers/MainContainer/MainContainer'

class SideNavContainer extends Component {
	getClassName = () => this.props.className ? this.props.className : ''
	getActiveStyle = (style) => this.props.toggled ? `${style} ${active} ${this.getClassName()}` : `${style} ${this.getClassName()}`

	render() {
		const containerStyle = this.getActiveStyle(container);
		const contentStyle = this.getActiveStyle(sideNav)
		return (
			<div className={containerStyle}>
				<div className={contentStyle}>
					{this.props.children}
				</div>
			</div>
		)	
	}
}

export default SideNavContainer;