import React from 'react';

import '../Tablero.css';

import Carta from './Carta'

class Tablero extends React.Component {
    render() {
        return (
            <div className="tablero">
                {
                    this.props.baraja
                        .map((card, index) => {
                            const beingCompare = this.props.selectedCards.indexOf(card) > -1;
                            return <Carta 
                                key = {index}
                                icon ={card.icon}
                                beingCompare = {beingCompare}
                                selectCards = {() => this.props.selectCard(card)}
                                guessed = {card.guessed}
                           />
                        })
                }
            </div>
        );
    }
};

export default Tablero;