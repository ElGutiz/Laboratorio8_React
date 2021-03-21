import React from 'react';

import '../Header.css';

class Header extends React.Component {
    render() {
        return (
            <header>
                <div className="Title">Memory Game</div>
                <div>
                    <button className="Reset_button">
                        Reiniciar
                    </button>
                </div>
                <div className="Title">
                    Intentos:
                </div>
            </header>
        );
    }
};

export default Header;