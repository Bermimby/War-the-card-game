
// constants 

const suits = ['d','h','c','s']
const faces = ['A','K','Q','J','10','09','08','07','06','05','04','03','02']
const deck = []
const values = { 
  'A': 14,
  'K': 13,
  'Q': 12,
  'J': 11,
  '10': 10,
  '09': 09,
  '08': 08,
  '07': 07,
  '06': 06,
  '05': 05,
  '04': 04,
  '03': 03,
  '02': 02,
};


// state variables
let score, player1Hand, player2Hand




// cached element
const button = document.getElementById('drawbutton') 
const playercard = document.getElementById('playercard')
const shufflebutton = document.getElementById('shufflebutton')
const compcard = document.getElementById('compcard')
const plyr1Score = document.getElementById('plyr1Score')
const plyr2Score= document.getElementById('plyr2Score')




// event listners


button.addEventListener('click',flipCard)
shufflebutton.addEventListener('click',dealHand)






function generateDeck() {
    suits.forEach(suit => {
        faces.forEach(face => {
            let score = values[face]
         deck.push({
                'face': suit + face,
                'value': score
            })
        })
    })
}
console.log(deck);

function shuffleDeck(deck) {
    for(let i = deck.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        const temp = deck[i];
        deck[i] = deck[j];
        deck[j] = temp;
        }
        return deck;
    }
function dealHand() {
        player1Hand = deck.slice(0, 26)
        console.log(player1Hand)
        player2Hand = deck.slice(26, 52)
        console.log(player2Hand)
    }
function flipCard() {
        const player1card = player1Hand.pop()
        const player2card = player2Hand.pop()
        playercard.classList[1] ? playercard.classList.replace(playercard.classList[1], player1card.face)  : playercard.classList.add(player1card.face)
        compcard.classList[1] ? compcard.classList.replace(compcard.classList[1], player2card.face)  : compcard.classList.add(player2card.face)
        compareCards(player1card, player2card)
    }
   
    

function renderScore() {
        player1.innerText= `playercard count ${player1Hand.length}`
        player2.innerText= `compcard count ${player2Hand.length}`
    }

    
    


function compareCards(player1card, player2card) {
        if(player1card.value > player2card.value) {
            console.log("Player 1 Wins this draw!")
        } else {
            console.log("Player 2 Wins this draw!")
        }
    }






    function init() {
        generateDeck()
        shuffleDeck(deck)
        dealHand()
        renderScore()
        }

init()