//Clicking a button should get a past, present, and future card description

const deck = 'https://rws-cards-api.herokuapp.com/api/v1/cards/random?n=3'
const $mainContent = $('main')




//
function showDeck() {
    $.ajax(deck).then(function(data) {
           
            const firstCard = data.cards[0].meaning_up
            const secondCard = data.cards[1].meaning_up
            const thirdCard = data.cards[2].meaning_up
        console.log(firstCard)
        console.log(secondCard)
        console.log(thirdCard)
        displayFirst(firstCard)
          }) 
        }
function displayFirst(firstCard) {
  const $test = $('<h2>')
  $test.text(firstCard)
  $mainContent.append($test)
}
       
// Event Listener 
const $deal = $('#btn').on('click', showDeck) 


