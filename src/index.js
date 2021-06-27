import React from 'react';
import { render } from 'react-dom';
import './styles.css';

const Hello = () => {
	return (
		<div>
			<h1>Hello world</h1>
			<div id="image"></div>
		</div>
	);
};

if (document.getElementById('target')) {
	render(<Hello />, document.getElementById('target'));
}
// render(<Hello />, document.getElementById('target'));
