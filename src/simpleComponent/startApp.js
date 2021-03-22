import React from "react";

import Header from '../components/Header';
import Tablero from '../components/Tablero';

import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

class StartApp extends React.Component {
  render() {
    return (
        <div className = "startName">
          <Header />
          <Tablero />
        </div>
    );
  }
}

export default StartApp;