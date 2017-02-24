import React from 'react';
import { Link } from 'react-router';

const Menu = ({color}) => {
	const url = window.location.pathname,
		  style = { color }
	console.log(style);
	return (
		<nav className="navbar navbar-default">
		  <div className="container-fluid">
		    <div className="navbar-header">
		    	<span className="navbar-brand">
		    		<Link to='/'>@alexfqc</Link>
		    	</span>
		    </div>
		    <div className="collapse navbar-collapse">
		    	<ul className="nav navbar-nav">
		        	<li className={url === '/about' ? 'active' : ''}>
		        		<Link to='/about' style={url === '/about' ? style : {}}>About</Link>
		        	</li>
		        	<li className={url === '/blog' ? 'active' : ''}>
		        		<Link to='/blog' style={url === '/blog' ? style : {}}>Blog</Link>
		        	</li>
		        </ul>
		    </div>
		  </div>
		</nav>

	);
}

export default Menu;