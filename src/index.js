import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header';
import Tablero from './components/Tablero';

import './index.css';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

ReactDOM.render(<Header />, document.getElementById('root'));
ReactDOM.render(<Tablero/>, document.getElementById('root2'));
