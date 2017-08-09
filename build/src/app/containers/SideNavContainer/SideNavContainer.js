import React, { Component } from 'react';
import {container, sideNav, activ} from './SideNavContainer.sass';

class SideNavContainer extends Component {
	render() {
		return (
			<div className={container}>
				<div className={sideNav}>
					SideNavContainer
					{this.props.children}
				</div>
			</div>
		)	
	}
}

export default SideNavContainer;