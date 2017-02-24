import React from 'react';
import { Link } from 'react-router';
import Menu from './common/Menu'

const App = (props) => (
	<div>
		<Menu />
		<div>App</div>
		{props.children}
	</div>
);

export default App;