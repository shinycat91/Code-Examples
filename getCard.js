function getCard() {
    const playingCard = {
        cardSuit: 'Hearts',
        cardValue: 'Ace'
    }
    const deckValues = [2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King", "Ace"];
    const deckSuits = ["Clubs", "Spades", "Hearts", "Diamonds"];
    let randomValue = Math.floor(Math.random()*deckValues.length);
    let randomSuit = Math.floor(Math.random()*deckSuits.length);

    playingCard.cardValue = deckValues[randomValue];
    playingCard.cardSuit = deckSuits[randomSuit];

    return playingCard;
}
