import React from 'react';
import ReactDOM from 'react-dom';

// import Header from './components/Header';
// import Tablero from './components/Tablero';

// import contruirBaraja from './utils/Baraja';

import './index.css';
// import '@fortawesome/fontawesome-free/js/fontawesome';
// import '@fortawesome/fontawesome-free/js/solid';
// import '@fortawesome/fontawesome-free/js/regular';
// import '@fortawesome/fontawesome-free/js/brands';

import StartApp from './simpleComponent/startApp';


// ReactDOM.render(<Header />, document.getElementById('root'));
// ReactDOM.render(<Tablero/>, document.getElementById('root2'));

ReactDOM.render(
    <StartApp />, 
    document.getElementById('root')
);