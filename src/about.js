import React from 'react';
import { render } from 'react-dom';
import './styles.css';

const About = () => {
	return (
		<div>
			<h1>About page</h1>
			<div id="image"></div>
		</div>
	);
};

render(<About />, document.getElementById('target'));
