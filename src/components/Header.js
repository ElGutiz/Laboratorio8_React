import React from "react";

import "../Header.css";
import "../buttom_style.css";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <header>
        <div className="Title">Memory Game</div>
        <div>
          <button className="raise" onClick={this.props.resetGame}>
            Reiniciar
          </button>
        </div>
        <div className="Title">
          Intentos:
          {" "}
          {this.props.tryNumber}
        </div>
      </header>
    );
  }
}

export default Header;
