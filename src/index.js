import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header';
import Tablero from './components/Tablero';

import './index.css';
import 'font-awesome/css/font-awesome.css';

ReactDOM.render(<Header />, document.getElementById('root'));
ReactDOM.render(<Tablero/>, document.getElementById('root2'));
