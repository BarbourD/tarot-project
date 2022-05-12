//Clicking a button should get a past, present, and future card description

const deck = 'https://rws-cards-api.herokuapp.com/api/v1/cards/'
// random?n=3'
const $mainContent = $('main')

//create function to show cards after button click
function showDeck() {
  $mainContent.empty()

  const cardArray = [
    {image: src="./images/cardimages/1 The Magician.png", name_short: 'ar01'},
    {image: src="./images/cardimages/2 High Priestess.png", name_short: 'ar02'},
    {image: src="./images/cardimages/3 Empress.png", name_short: 'ar03'},
    {image: src="./images/cardimages/4 Emperor.png", name_short: 'ar04'},
    {image: src="./images/cardimages/5 Hierophant.png", name_short: 'ar05'},
    {image: src="./images/cardimages/6 The Lovers.png", name_short: 'ar06'},
    {image: src="./images/cardimages/7 The Chariot.png", name_short: 'ar07'},
    {image: src="./images/cardimages/8 Strength.png", name_short: 'ar08'},
    {image: src="./images/cardimages/9 Hermit.png", name_short: 'ar09'},
    {image: src="./images/cardimages/10 The Wheel.png", name_short: 'ar10'},
    {image: src="./images/cardimages/11 Justice.png", name_short: 'ar11'},
    {image: src="./images/cardimages/11 The_Hanged_man.png", name_short: 'ar12'},
    {image: src="./images/cardimages/11 13_Death.png", name_short: 'ar13'},
    {image: src="./images/cardimages/11 14_Temperance.png", name_short: 'ar14'},
    {image: src="./images/cardimages/11 15_The_Devil.png", name_short: 'ar15'},
    {image: src="./images/cardimages/11 16_The_Tower.png", name_short: 'ar16'},
    {image: src="./images/cardimages/11 17_The_Star.png", name_short: 'ar17'},
    {image: src="./images/cardimages/11 18_The_Moon.png", name_short: 'ar18'},
    {image: src="./images/cardimages/11 19_The_Sun.png.png", name_short: 'ar19'},
    {image: src="./images/cardimages/11 20_Judgement.png", name_short: 'ar20'},
    {image: src="./images/cardimages/0-The-Fool.png", name_short: 'ar00'},
    {image: src="./images/cardimages/11 21_The_World.png", name_short: 'ar21'},
    {image: src="./images/cardimages/11 Justice.png", name_short: 'wapa'},
    {image: src="./images/cardimages/11 Justice.png", name_short: 'wakn'},
    {image: src="./images/cardimages/11 Justice.png", name_short: 'waqu'},
    {image: src="./images/cardimages/11 Justice.png", name_short: 'waki'},
    {image: src="./images/cardimages/11 Justice.png", name_short: 'waac'},
    {image: src="./images/cardimages/11 Justice.png", name_short: 'wa02'},
    {image: src="./images/cardimages/11 Justice.png", name_short: 'wa03'},
    {image: src="./images/cardimages/11 Justice.png", name_short: 'wa04'},
    {image: src="./images/cardimages/11 Justice.png", name_short: 'wa05'},
    {image: src="./images/cardimages/11 Justice.png", name_short: 'wa06'},
    {image: src="./images/cardimages/11 Justice.png", name_short: 'wa07'},
    {image: src="./images/cardimages/11 Justice.png", name_short: 'wa08'},
    {image: src="./images/cardimages/11 Justice.png", name_short: 'wa09'},
    {image: src="./images/cardimages/11 Justice.png", name_short: 'wa10'},
    {image: src="./images/cardimages/11 Justice.png", name_short: 'cupa'},
    {image: src="./images/cardimages/11 Justice.png", name_short: 'cukn'},
    {image: src="./images/cardimages/11 Justice.png", name_short: 'cuqu'},
    {image: src="./images/cardimages/11 Justice.png", name_short: 'cuki'},
    {image: src="./images/cardimages/11 Justice.png", name_short: 'cuac'},
    {image: src="./images/cardimages/11 Justice.png", name_short: 'cu02'},
    {image: src="./images/cardimages/11 Justice.png", name_short: 'cu03'},
    {image: src="./images/cardimages/11 Justice.png", name_short: 'cu04'},
    {image: src="./images/cardimages/11 Justice.png", name_short: 'cu05'},
    {image: src="./images/cardimages/11 Justice.png", name_short: 'cu06'},
    {image: src="./images/cardimages/11 Justice.png", name_short: 'cu07'},
    {image: src="./images/cardimages/11 Justice.png", name_short: 'cu08'},
    {image: src="./images/cardimages/11 Justice.png", name_short: 'cu09'},
    {image: src="./images/cardimages/11 Justice.png", name_short: 'cu10'},
    {image: src="./images/cardimages/11 Justice.png", name_short: 'pepa'},
    {image: src="./images/cardimages/11 Justice.png", name_short: 'pekn'},
    {image: src="./images/cardimages/11 Justice.png", name_short: 'pequ'},
    {image: src="./images/cardimages/11 Justice.png", name_short: 'peki'},
    {image: src="./images/cardimages/11 Justice.png", name_short: 'peac'},
    {image: src="./images/cardimages/11 Justice.png", name_short: 'pe02'},
    {image: src="./images/cardimages/11 Justice.png", name_short: 'pe03'},
    {image: src="./images/cardimages/11 Justice.png", name_short: 'pe04'},
    {image: src="./images/cardimages/11 Justice.png", name_short: 'pe05'},
    {image: src="./images/cardimages/11 Justice.png", name_short: 'pe06'},
    {image: src="./images/cardimages/11 Justice.png", name_short: 'pe07'},
    {image: src="./images/cardimages/11 Justice.png", name_short: 'pe08'},
    {image: src="./images/cardimages/11 Justice.png", name_short: 'pe09'},
    {image: src="./images/cardimages/11 Justice.png", name_short: 'pe10'},
    {image: src="./images/cardimages/11 Justice.png", name_short: 'swpa'},
    {image: src="./images/cardimages/11 Justice.png", name_short: 'swkn'},
    {image: src="./images/cardimages/11 Justice.png", name_short: 'swqu'},
    {image: src="./images/cardimages/11 Justice.png", name_short: 'swki'},
    {image: src="./images/cardimages/11 Justice.png", name_short: 'swac'},
    {image: src="./images/cardimages/11 Justice.png", name_short: 'sw02'},
    {image: src="./images/cardimages/11 Justice.png", name_short: 'sw03'},
    {image: src="./images/cardimages/11 Justice.png", name_short: 'sw04'},
    {image: src="./images/cardimages/11 Justice.png", name_short: 'sw05'},
    {image: src="./images/cardimages/11 Justice.png", name_short: 'sw06'},
    {image: src="./images/cardimages/11 Justice.png", name_short: 'sw07'},
    {image: src="./images/cardimages/11 Justice.png", name_short: 'sw08'},
    {image: src="./images/cardimages/11 Justice.png", name_short: 'sw09'},
    {image: src="./images/cardimages/11 Justice.png", name_short: 'sw10'},
  ]

  $.ajax(deck).then(function (data) {
    let newArray = data.cards
    console.log(newArray.length)
    for(let i = 0; i < newArray.length; i++ ) {
      newArray[i].image = cardArray[i].image
    }
    console.log(newArray)
    const firstCard = data.cards[0]
    const secondCard = data.cards[1]
    const thirdCard = data.cards[2]
console.log(data)
    console.log(firstCard.name_short)
    console.log(secondCard.name_short)
    console.log(thirdCard.name_short)
    console.log(cardObject.ar00)
  displayFirst(firstCard.meaning_up)
  displaySecond(secondCard.meaning_up)
  displayThird(thirdCard.meaning_up)
// if (firstCard.name_short === cardObject) {
//   console.log('hell yeah')
// }
  // displayFirstImage()
})
}


    
//functions to display meaning of first random card.
function displayFirst(firstCard) {
  // const $h2 = $('<h2>')
  // $h2.text("Past")
  // $mainContent.append($h2)
  const $cardPast = $('<span>')
  $cardPast.addClass('past')
  $cardPast.text(firstCard)
  $mainContent.append($cardPast)
}
// function displayFirstImage(firstCard) {
//   const $imagePast = $('<div>')
//   $imagePast.addClass('past')
//   $imagePast.text(firstCard)
//   $mainContent.append($imagePast)}

function displaySecond(secondCard) {
  const $cardPresent = $('<span>')
  $cardPresent.addClass('present')
  $cardPresent.text(secondCard)
  $mainContent.append($cardPresent)
}

function displayThird(thirdCard) {
  const $cardFuture = $('<span>')
  $cardFuture.addClass('future')
  $cardFuture.text(thirdCard)
  $mainContent.append($cardFuture)
}

// Event Listener 
const $deal = $('#btn').on('click', showDeck) 





//create a function that appends a picture from an array of a card chosen at random
// function pastImage() {
//   $.ajax(deck).then(function (data) {
//     const firstImage = data.cards[0]
//     const secondImage = data.cards[1]
//     const thirdImage = data.cards[2]
  
  
  
  
  
//   if (cardArray.name_short === firstImage.name-short) {
//     display
//   }
// }