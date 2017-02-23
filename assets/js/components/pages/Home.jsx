import React from 'react';
import { Link } from 'react-router';

const About = () => (
	<div>
		<div>Home</div>
		<Link to='/about'>About</Link>
		<Link to='/blog'>Blog</Link>
	</div>
);

export default About;