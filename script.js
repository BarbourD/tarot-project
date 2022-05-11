//Clicking a button should get a past, present, and future card description

const cardObject = {
'ar00': src="./images/cardimages/0-The-Fool.png",
// image: src="./images/cardimages/1 The Magician.png", name_short: 'ar01',
// image: src="./images/cardimages/2 High Priestess.png", name_short: 'ar02',
// image: src="./images/cardimages/3 Empress.png", name_short: 'ar03',
// {image: src="./images/cardimages/4 Emperor.png", name_short: 'ar04',
// {image: src="./images/cardimages/5 Hierophant.png", name_short: 'ar05'},
// {image: src="./images/cardimages/6 The Lovers.png", name_short: 'ar06'},
// {image: src="./images/cardimages/7 The Chariot.png", name_short: 'ar07'},
// {image: src="./images/cardimages/8 Strength.png", name_short: 'ar08'},
// {image: src="./images/cardimages/9 Hermit.png", name_short: 'ar09'},
// {image: src="./images/cardimages/10 The Wheel.png", name_short: 'ar10'},
// {image: src="./images/cardimages/11 Justice.png", name_short: 'ar11'},
// {image: src="./images/cardimages/5 Emperor.png", name_short: 'ar12'},
// {image: src="./images/cardimages/5 Emperor.png", name_short: 'ar13'},
// {image: src="./images/cardimages/5 Emperor.png", name_short: 'ar14'},
// {image: src="./images/cardimages/5 Emperor.png", name_short: 'ar15'},
// {image: src="./images/cardimages/5 Emperor.png", name_short: 'ar16'},
// {image: src="./images/cardimages/5 Emperor.png", name_short: 'ar17'},
// {image: src="./images/cardimages/5 Emperor.png", name_short: 'ar18'},
// {image: src="./images/cardimages/5 Emperor.png", name_short: 'ar19'},
// {image: src="./images/cardimages/5 Emperor.png", name_short: 'ar20'},
// {image: src="./images/cardimages/5 Emperor.png", name_short: 'ar21'},
}
// console.log(cardObject.ar00)

const deck = 'https://rws-cards-api.herokuapp.com/api/v1/cards/random?n=3'
const $mainContent = $('main')


function showDeck() {
  $mainContent.empty()

  // const cardArray = [
  //   {image: src="./images/cardimages/0-The-Fool.png", name_short: 'ar00'},
  //   {image: src="./images/cardimages/1 The Magician.png", name_short: 'ar01'},
  //   {image: src="./images/cardimages/2 High Priestess.png", name_short: 'ar02'},
  //   {image: src="./images/cardimages/3 Empress.png", name_short: 'ar03'},
  //   {image: src="./images/cardimages/4 Emperor.png", name_short: 'ar04'},
  //   {image: src="./images/cardimages/5 Hierophant.png", name_short: 'ar05'},
  //   {image: src="./images/cardimages/6 The Lovers.png", name_short: 'ar06'},
  //   {image: src="./images/cardimages/7 The Chariot.png", name_short: 'ar07'},
  //   {image: src="./images/cardimages/8 Strength.png", name_short: 'ar08'},
  //   {image: src="./images/cardimages/9 Hermit.png", name_short: 'ar09'},
  //   {image: src="./images/cardimages/10 The Wheel.png", name_short: 'ar10'},
  //   {image: src="./images/cardimages/11 Justice.png", name_short: 'ar11'},]

  $.ajax(deck).then(function (data) {
    const firstCard = data.cards[0]
    const secondCard = data.cards[1]
    const thirdCard = data.cards[2]

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
  $cardPresent.addClass('present flex-ctr')
  $cardPresent.text(secondCard)
  $mainContent.append($cardPresent)
}

function displayThird(thirdCard) {
  const $cardFuture = $('<span>')
  $cardFuture.addClass('future flex-ctr')
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