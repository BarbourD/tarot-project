//Clicking a button should get a past, present, and future card description

const deck = 'https://rws-cards-api.herokuapp.com/api/v1/cards/random?n=3'
const $mainContent = $('main')




//
function showDeck() {
    $.ajax(deck).then(function(data) {
           
            const firstCard = data.cards[0].meaning_up
            const secondCard = data.cards[1].meaning_up
            const thirdCard = data.cards[2].meaning_up
        // console.log(firstCard)
        // console.log(secondCard)
        // console.log(thirdCard)
        displayFirst(firstCard)
        displaySecond(secondCard)
        displayThird(thirdCard)
          }) 
        }
function displayFirst(firstCard) {
  const $cardPast = $('<div>')
  $cardPast.addClass('past')
  $cardPast.text(firstCard)
  $mainContent.append($cardPast)
}

function displaySecond(secondCard) {
  const $cardPresent = $('<div>')
  $cardPresent.addClass('present')
  $cardPresent.text(secondCard)
  $mainContent.append($cardPresent)
}

function displayThird(thirdCard) {
  const $cardFuture = $('<div>')
  $cardFuture.addClass('future')
  $cardFuture.text(thirdCard)
  $mainContent.append($cardFuture)
}   
// Event Listener 
const $deal = $('#btn').on('click', showDeck) 


