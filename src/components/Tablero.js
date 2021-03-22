import React from 'react';

import '../Tablero.css';

import Carta from './Carta'
import BackCard from "./Back_card";

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
                                icon = {card.icon}
                                beingCompare = {beingCompare}
                                selectCard = {() => this.props.selectCard(card)}
                                guessed = {card.guessed}
                           />;
                        })
                }
            </div>
        );
    }
};

export default Tablero;