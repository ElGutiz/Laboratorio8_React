import React from "react";

import Header from '../components/Header';
import Tablero from '../components/Tablero';
import contruirBaraja from '../utils/Baraja';

import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

const getInitialState = () => {
  const baraja = contruirBaraja();
  return  {
    baraja,
    selectedCards: [],
    comparing: false
  };
}

class StartApp extends React.Component {
  constructor(props){
    super(props);
    this.state = getInitialState();
  }

  render() {
    return (
        <div className = "startName">
          <Header />
          <Tablero 
            baraja = {this.state.baraja}
            selectedCards = {this.state.selectedCards}
            selectCard = {(card) => this.selectCard(card)}
          />
        </div>
    );
  }

  selectCard(card){
    if (
      this.state.comparing || 
      this.state.selectedCards.indexOf(card) > -1 ||
      card.guessed
    ){
      return;
    }

    const selectedCards = [...this.state.selectedCards, card];
    this.setState({
      selectedCards
    });

    if (selectedCards.length == 2){
      this.compareCards(selectedCards);
    }
  }

  compareCards(selectedCards){
    this.setState({comparing: true});

    setTimeout(()  => {
      const [first_card, second_card] = selectedCards;
      let baraja = this.state.baraja;

      if(first_card.icon === second_card.icon){
        baraja = baraja.map((card) => {
          if  (card.icon !== first_card.icon){
            return card;
          }

          return {...card, guessed: true};
        });
      }

      this.setState({
        selectedCards: [],
        baraja,
        comparing: false
      })

    }, 1000)
  }

}

export default StartApp;