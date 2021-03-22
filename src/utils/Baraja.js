import shuffle from 'lodash.shuffle';
import FontAwesomeClasses from './fontAwesomeClasses';

const CARDS_NUMBER = 20;

export default () => {
    const fontAwesomeClasses = FontAwesomeClasses();
    let cards = [];

    while (cards.length < CARDS_NUMBER){
        const index = Math.floor(Math.random() * fontAwesomeClasses.length);
        const card = {
            icon: fontAwesomeClasses.splice(index, 1)[0],
            guessed: false
        };

        cards.push(card);
        cards.push({...card});
    }

    return shuffle(cards);
};