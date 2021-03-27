import React from 'react';

import Header from '../components/Header';
import Tablero from '../components/Tablero';
import contruirBaraja from '../utils/Baraja';

const getInitialState = () => {
  const baraja = contruirBaraja();
  return {
    baraja,
    selectedCards: [],
    comparing: false,
    tryNumber: 0,
  };
};

class StartApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = getInitialState();
  }

  selectCard(card) {
    if (
      this.state.comparing
      || this.state.selectedCards.indexOf(card) > -1
      || card.guessed
    ) {
      return;
    }

    const selectedCards = [...this.state.selectedCards, card];
    this.setState({
      selectedCards,
    });

    if (selectedCards.length === 2) {
      this.compareCards(selectedCards);
    }
  }

  compareCards(selectedCards) {
    this.setState({ comparing: true });

    setTimeout(() => {
      const [firstCard, secondCard] = selectedCards;
      let { baraja } = this.state;

      if (firstCard.icon === secondCard.icon) {
        baraja = baraja.map((card) => {
          if (card.icon !== firstCard.icon) {
            return card;
          }

          return { ...card, guessed: true };
        });
      }

      this.victory(baraja);
      this.setState({
        selectedCards: [],
        baraja,
        comparing: false,
        tryNumber: this.state.tryNumber + 1,
      });
    }, 1000);
  }

  victory(baraja) {
    if (baraja.filter((card) => !card.guessed).length === 0) {
      alert(`You win in only ${this.state.tryNumber} movements`);
    }
  }

  resetGame() {
    this.setState(
      getInitialState(),
    );
  }

  render() {
    return (
      <div className="startName">
        <Header
          tryNumber={this.state.tryNumber}
          resetGame={() => this.resetGame()}
        />
        <Tablero
          baraja={this.state.baraja}
          selectedCards={this.state.selectedCards}
          selectCard={(card) => this.selectCard(card)}
        />

      </div>
    );
  }
}

export default StartApp;
