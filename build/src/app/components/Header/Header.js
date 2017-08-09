import React, { Component } from 'react';
import { Header as SemHeader} from 'semantic-ui-react'

import {container, title, toggle} from './Header.sass';


const Title = (props) => (
	<SemHeader className={title} size="huge">AtypicalDev</SemHeader>
	// <h1 className={title}>AtypicalDev</h1>
)

// const NavTrigger = (props) => (
	
// )

class Header extends Component {
	render() {
		return (
			<div className={`${container}`}>
				<Title />
				<h1 className={toggle} onClick={this.props.toggleVisibility}>☰</h1>
			</div>
		)
	}
}

export default Header;