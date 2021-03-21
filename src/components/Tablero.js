import React from 'react';

import '../Tablero.css';

import Carta from './Carta'

class Tablero extends React.Component {
    render() {
        const cartas = [1,2,3,4,5];
        return (
            <div className="tablero">
                {
                    cartas.map((carta) => <Carta></Carta>)
                }
            </div>
        );
    }
};

export default Tablero;