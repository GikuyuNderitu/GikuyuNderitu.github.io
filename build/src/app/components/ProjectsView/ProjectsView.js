import React, { Component } from 'react';
import styles from './ProjectsView.sass';

import { Header, Button } from 'semantic-ui-react';


class ProjectsView extends Component {
	render() {
		return (
			<div id={this.props.id} className={this.props.className}>
				<Header size="large">{'Projects'}</Header>
				<p>{`Here are my projects, go ahead, take a look!`}</p>
				<Button> Take a look !</Button>
			</div>
		)
	}
}

export default ProjectsView;