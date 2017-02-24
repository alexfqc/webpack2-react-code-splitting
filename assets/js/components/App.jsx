import React from 'react';
import { Link } from 'react-router';
import Menu from './common/Menu'

const App = (props) => {
	let color = 'tomato';
	switch(window.location.pathname){
		case '/blog':
				color = 'cornflowerblue';
				break;

		case '/about':
				color = 'orange';
				break
	}
	const style = {
					'background-color': color,
					'height': '100%',
					'position': 'absolute'
				};
	return(
		<div className='col-xs-12' style={style}>
			<Menu />
			{props.children}
		</div>
	);
	
};

export default App;