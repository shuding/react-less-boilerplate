import React from 'react';

import styles from './styles.less';

export default class Hello extends React.Component {
	render () {
		return (
			<p>Hello, <span className={styles.hello}>{this.props.name}</span>!</p>
		);
	}
}
