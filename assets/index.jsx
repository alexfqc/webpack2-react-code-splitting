import React from 'react'
import { Route, IndexRoute, Router, browserHistory } from 'react-router'
import App from './components/App'
import { render } from 'react-dom'
import routes from './routes'

render(
	<Router history={browserHistory}>
		{routes}
	</Router>,
	 document.getElementById('app')
);