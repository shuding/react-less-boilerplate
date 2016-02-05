import React from 'react';
import ReactDOM from 'react-dom';

import Hello from './Hello';

import styles from './main.less';

class App extends React.Component {
	render () {
		return (
			<div>
				<Hello name="world"/>
				<Hello name="React"/>
				<Hello name="Less"/>
			</div>
		);
	}
}

ReactDOM.render(React.createElement(App), document.getElementById('app'), null);
