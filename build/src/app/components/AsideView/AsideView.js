import React, { Component } from 'react';
import styles from './AsideView.sass';
// import {getstyles} from 'Utils'
const computeStyle = style => style ? style : '';
const getstyles = (...args) => args.map(computeStyle).reduce((prev, cur) => `${prev} ${cur}` , '')

// 1. Get a bunch of arguments
// 2. Make into array like var
// 3. compute each argument to a result or an empty string
// 4. Join the newly mapped arguments

class AsideView extends Component {
	render() {
		const innerStyle = getstyles(this.props.className, styles.container)
		console.log(innerStyle);
		return (
			<div className={innerStyle}>
				{this.props.children}
			</div>
		)
	}
}

export default AsideView;