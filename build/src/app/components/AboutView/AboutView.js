import React, { Component } from 'react';
import styles from './AboutView.sass';

import {Header, Segment} from 'semantic-ui-react'

const Paragraph = () => (
	<p>
		{`I have many hobbies including, but not limited to, photography/videography, 
		hiking, reading, beach traveling and, of course, thinking about all of the
		potential existential threats to mankind, you know the usual ;)`}
	</p>
)

class AboutView extends Component {
	render() {
		return (
			<div id={this.props.id} className={this.props.className}>
				<Header size="large">About Me</Header>
				<Paragraph />
			</div>
		)
	}
}

export default AboutView;