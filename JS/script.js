const deck = 'https://rws-cards-api.herokuapp.com/api/v1/cards/random?n=3'
const $main = $('<main>')
//connect the api with AJAX
const $cards = $.ajax(deck).then(function(data) {
    console.log(data)
})



const $showDeck = () => {
  $main.append($cards.desc)
    
}






//deal cards on click


//show images for 3 cards
//link api definitions 
//show definitions on hover
†

//get button and create event listener for button
const $deal = $('#btn').on('click', $showDeck) 
// console.log(deck
)