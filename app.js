const cardsEl = document.getElementById("cards-el");
const sumEl = document.getElementById("sum-el");
const messageEl = document.getElementById("message-el");
let isAlive = false;
let hasBlackJack = false;

let cards = [];
let sum= 0;

function startGame(){
    isAlive = true;
    hasBlackJack = false;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    
    renderGame();
}

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1;
    if (randomNumber > 10) {
        return 10; // Jacks, Queens, Kings are worth 10
    } else if (randomNumber === 1) {
        return 11; // Aces default to 11
    } else {
        return randomNumber;
    }
}

function renderGame() {

    cardsEl.textContent = "Cards: ";
    
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }

    sumEl.textContent = "Sum: " + sum;

    if (sum === 21) {
        messageEl.textContent = "Viola! You've got Blackjack!";
        isAlive = false;
        hasBlackJack = true;
    } else if (sum < 21) {
        messageEl.textContent = "Press another time? (Draw a card)";
    } else {
        messageEl.textContent = "You have lost (Bust)!";
        isAlive = false;
    }
}

function newGame() {
    // Only allow drawing a card if the player hasn't lost or got 21
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard();
        sum += card;
        cards.push(card); // Add new card to array
        renderGame();
    }
}