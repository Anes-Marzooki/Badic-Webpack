import React from 'react';
import { render } from 'react-dom';
import './styles.css';

const Hello = () => <h1>Hello world</h1>;

render(<Hello />, document.getElementById('target'));
