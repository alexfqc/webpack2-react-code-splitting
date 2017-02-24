import React from 'react';
import { Link } from 'react-router';

const Menu = () => {
	const url = window.location.pathname;
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
		        		<Link to='/about'>About</Link>
		        	</li>
		        	<li className={url === '/blog' ? 'active' : ''}>
		        		<Link to='/blog'>Blog</Link>
		        	</li>
		        </ul>
		    </div>
		  </div>
		</nav>

	);
}

export default Menu;