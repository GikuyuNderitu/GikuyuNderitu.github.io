import React, { Component } from 'react';
import styles from './WelcomeComponent.sass';

import {Header, Segment} from 'semantic-ui-react'

class WelcomeComponent extends Component {
	render() {
		return (
			<div id={this.props.id} className={this.props.className}>
				<Header size="large">{'Hi!'}</Header>
				<p>
					{`Hey! My name is Gikuyu Nderitu, I like to code and I'm thoroughly enjoying the Full Stack 
					Development process. There's a ton to learn, I love the process of learning, and I can't wait to learn more.
					As is the nature of being a Full Stack Afficienado , I'm an effective and quite prolific
					JavaScript developer, but I'm also an effective backend dev not only with NodeJs, but also
					with Go (Golang) and Python. In the end however, my only preferred tool is the one that gets
					the job done the best.`}
				</p>
			</div>
		)
	}
}

export default WelcomeComponent;