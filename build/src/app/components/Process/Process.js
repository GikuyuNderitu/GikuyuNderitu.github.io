import React, { Component } from 'react';
import styles from './Process.sass';

import {Header, Segment} from 'semantic-ui-react'

class Process extends Component {
	render() {
		return (
			<div id={this.props.id} className={this.props.className}>
				<Header size="large">{'My Process'}</Header>
				<p>
					{`I subscribe to a philosophy of development. This philosophy is a relatively simple one.
					Have a plan, iterate on that plan as quickly as possible, don't be afraid to make mistakes,
					fix those mistakes as quickly as possible without violating the plan, get stuff done. I've 	
					found this to be an efective philosophy in development and life`}
				</p>
			</div>
		)
	}
}

export default Process;