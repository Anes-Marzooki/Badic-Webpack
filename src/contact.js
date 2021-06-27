import React from 'react';
import { render } from 'react-dom';
import './styles.css';

const Contact = () => {
	return (
		<div>
			<h1>Contact page</h1>
			<div id="image"></div>
		</div>
	);
};

render(<Contact />, document.getElementById('target'));
