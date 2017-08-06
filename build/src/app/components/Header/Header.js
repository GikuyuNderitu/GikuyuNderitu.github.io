import React, { Component } from 'react';
import {container, title, toggle} from './Header.sass';


const Title = (props) => (
	<h1 className={title}>AtypicalDev</h1>
)

const NavTrigger = (props) => (
	<h1 className={toggle}>☰</h1>
)

class Header extends Component {
	render() {
		return (
			<div className={container}>
				<Title />
				<NavTrigger />
			</div>
		)
	}
}

export default Header;