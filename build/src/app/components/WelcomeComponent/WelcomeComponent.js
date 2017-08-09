import React, { Component } from 'react';
import styles from './WelcomeComponent.sass';

import {Header, Segment} from 'semantic-ui-react'

class WelcomeComponent extends Component {
	render() {
		return (
			<div id={this.props.id} className={this.props.className}>
				<Header size="large">{'Hi!'}</Header>
				<p>
					{`So, my name is Gikuyu Nderitu and I like to code. I'm thoroughly enjoy the Full Stack 
					Development process. There is so much to learn and I love the process of learning it all.
					As is the nature of being a Full Stack Afficienado , I'm an effective and quite prolific
					JavaScript developer, but I'm also an effective backend dev not only with NodeJs, but also
					with Go (Golang) and Python.`}
				</p>
			</div>
		)
	}
}

export default WelcomeComponent;