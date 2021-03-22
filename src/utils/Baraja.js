import shuffle from 'lodash.shuffle';
import fontAwesomeClasses from './fontAwesomeClasses';

const CARDS_NUMBER = 20;

export default () => {
    const fontAwesomeClasses = fontAwesomeClasses;
    let cards = [];

    while (cards.length < CARDS_NUMBER){
        const index = Math.floor(Math.random() = fontAwesomeClasses.length);
        const card = {
            icono: fontAwesomeClasses.splice(index, 1)[0],
            gussed: false
        };

        cards.push(card);
        cards.push({...card});
    }

    return shuffle(cards);
};