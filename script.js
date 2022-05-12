//Clicking a button should get a past, present, and future card description

const deck = 'https://rws-cards-api.herokuapp.com/api/v1/cards/'
// random?n=3'
const $mainContent = $('main')

//create function to show cards after button click
function showDeck() {
  $mainContent.empty()

  const cardArray = [
    {image: src="https://i.imgur.com/ou7a1vX.png", name_short: 'ar01'},
    {image: src="https://i.imgur.com/1jVAkjU.png", name_short: 'ar02'},
    {image: src="https://i.imgur.com/Iy5dO8G.png", name_short: 'ar03'},
    {image: src="https://i.imgur.com/zBxmj6d.png", name_short: 'ar04'},
    {image: src="https://i.imgur.com/emyPvtE.png", name_short: 'ar05'},
    {image: src="https://i.imgur.com/FLIl1N6.png", name_short: 'ar06'},
    {image: src="https://i.imgur.com/Kac9WVm.png", name_short: 'ar07'},
    {image: src="https://i.imgur.com/flfxtGn.png", name_short: 'ar08'},
    {image: src="https://i.imgur.com/KMaYG8l.png", name_short: 'ar09'},
    {image: src="https://i.imgur.com/E8praU6.png", name_short: 'ar10'},
    {image: src="https://i.imgur.com/EkCBlzP.png", name_short: 'ar11'},
    {image: src="https://i.imgur.com/ZGakTlS.png", name_short: 'ar12'},
    {image: src="https://i.imgur.com/c0ZYRKH.png", name_short: 'ar13'},
    {image: src="https://i.imgur.com/t0hb5xz.png", name_short: 'ar14'},
    {image: src="https://i.imgur.com/0Wx9TSk.png", name_short: 'ar15'},
    {image: src="https://i.imgur.com/Dt9BP94.png", name_short: 'ar16'},
    {image: src="https://i.imgur.com/xU8sPUa.png", name_short: 'ar17'},
    {image: src="https://i.imgur.com/1F7TZIF.png", name_short: 'ar18'},
    {image: src="https://i.imgur.com/bQL3PCV.png", name_short: 'ar19'},
    {image: src="https://i.imgur.com/tw5TBND.png", name_short: 'ar20'},
    {image: src="https://i.imgur.com/lpI7nRT.png", name_short: 'ar00'},
    {image: src="https://i.imgur.com/FVW3Spv.png", name_short: 'ar21'},
    {image: src="https://i.imgur.com/41zenYf.png", name_short: 'wapa'},
    {image: src="https://i.imgur.com/W49rxIf.png", name_short: 'wakn'},
    {image: src="https://i.imgur.com/uhg0VwF.png", name_short: 'waqu'},
    {image: src="https://i.imgur.com/vYOyVVU.png", name_short: 'waki'},
    {image: src="https://i.imgur.com/MOtZBR4.png", name_short: 'waac'},
    {image: src="https://i.imgur.com/VxxIjUV.png", name_short: 'wa02'},
    {image: src="https://i.imgur.com/28hjBAI.png", name_short: 'wa03'},
    {image: src="https://i.imgur.com/0hykFOG.png", name_short: 'wa04'},
    {image: src="https://i.imgur.com/58N8Lp4.png", name_short: 'wa05'},
    {image: src="https://i.imgur.com/z6TbcMi.png", name_short: 'wa06'},
    {image: src="https://i.imgur.com/yDYpdCH.png", name_short: 'wa07'},
    {image: src="https://i.imgur.com/kHWeIO1.png", name_short: 'wa08'},
    {image: src="https://i.imgur.com/3UQCOLz.png", name_short: 'wa09'},
    {image: src="https://i.imgur.com/gaJmhnA.png", name_short: 'wa10'},
    {image: src="https://i.imgur.com/DcifCsn.png", name_short: 'cupa'},
    {image: src="https://i.imgur.com/EvdadKi.png", name_short: 'cukn'},
    {image: src="https://i.imgur.com/XOb4nXE.png", name_short: 'cuqu'},
    {image: src="https://i.imgur.com/YxHmLLz.png", name_short: 'cuki'},
    {image: src="https://i.imgur.com/SXzxfUS.png", name_short: 'cuac'},
    {image: src="https://i.imgur.com/50Eb5rc.png", name_short: 'cu02'},
    {image: src="https://i.imgur.com/ff0eW3O.png", name_short: 'cu03'},
    {image: src="https://i.imgur.com/eUBm4Jk.png", name_short: 'cu04'},
    {image: src="https://i.imgur.com/bBb66yr.png", name_short: 'cu05'},
    {image: src="https://i.imgur.com/BhPsUAY.png", name_short: 'cu06'},
    {image: src="https://i.imgur.com/TqvFawz.png", name_short: 'cu07'},
    {image: src="https://i.imgur.com/pSN1P4d.png", name_short: 'cu08'},
    {image: src="https://i.imgur.com/P9eqzRH.png", name_short: 'cu09'},
    {image: src="https://i.imgur.com/zD4cHRm.png", name_short: 'cu10'},
    {image: src="https://i.imgur.com/PqsSCP2.png", name_short: 'pepa'},
    {image: src="https://i.imgur.com/GyL3JQM.png", name_short: 'pekn'},
    {image: src="https://i.imgur.com/a7ZwhIu.png", name_short: 'pequ'},
    {image: src="https://i.imgur.com/swVWm8h.png", name_short: 'peki'},
    {image: src="https://i.imgur.com/tUOQIls.png", name_short: 'peac'},
    {image: src="https://i.imgur.com/AOtzlja.png", name_short: 'pe02'},
    {image: src="https://i.imgur.com/hqXfePv.png", name_short: 'pe03'},
    {image: src="https://i.imgur.com/cLWQA4R.png", name_short: 'pe04'},
    {image: src="https://i.imgur.com/pP3xoz4.png", name_short: 'pe05'},
    {image: src="https://i.imgur.com/tX9jPFc.png", name_short: 'pe06'},
    {image: src="https://i.imgur.com/RzITsnH.png", name_short: 'pe07'},
    {image: src="https://i.imgur.com/XfcjBbM.png", name_short: 'pe08'},
    {image: src="https://i.imgur.com/RG1pCNZ.png", name_short: 'pe09'},
    {image: src="https://i.imgur.com/LP8tjfo.png", name_short: 'pe10'},
    {image: src="https://i.imgur.com/e9hxMmv.png", name_short: 'swpa'},
    {image: src="https://i.imgur.com/cvGbyHZ.png", name_short: 'swkn'},
    {image: src="https://i.imgur.com/WoJSYHz.png", name_short: 'swqu'},
    {image: src="https://i.imgur.com/fsFBZNx.png", name_short: 'swki'},
    {image: src="https://i.imgur.com/DCsVH2J.png", name_short: 'swac'},
    {image: src="https://i.imgur.com/O9dDSZh.png", name_short: 'sw02'},
    {image: src="https://i.imgur.com/oIUggAR.png", name_short: 'sw03'},
    {image: src="https://i.imgur.com/YvrbYvR.png", name_short: 'sw04'},
    {image: src="https://i.imgur.com/pgVi98N.png", name_short: 'sw05'},
    {image: src="https://i.imgur.com/6CMkKYz.png", name_short: 'sw06'},
    {image: src="https://i.imgur.com/sujQzip.png", name_short: 'sw07'},
    {image: src="https://i.imgur.com/nDQkZ98.png", name_short: 'sw08'},
    {image: src="https://i.imgur.com/bGsZNa8.png", name_short: 'sw09'},
    {image: src="https://i.imgur.com/9CqE1g7.png", name_short: 'sw10'},
  ]

  $.ajax(deck).then(function (data) {
    let newArray = data.cards
    // console.log(newArray)
    for(let i = 0; i < newArray.length; i++ ) {
      newArray[i].image = cardArray[i].image
    }
    const randomIndex = Math.floor(Math.random() * newArray.length)
    const randomIndex2 = Math.floor(Math.random() * newArray.length)
    const randomIndex3 = Math.floor(Math.random() * newArray.length)
    const firstCard = newArray[randomIndex]
    // console.log([randomIndex])
    const secondCard = newArray[randomIndex2]
    // console.log(secondCard)
    const thirdCard = newArray[randomIndex3]
    // console.log(thirdCard)
// console.log(data)
//     console.log(firstCard.name_short)
//     console.log(secondCard.name_short)
//     console.log(thirdCard.name_short)
//     console.log(cardObject.ar00)
  displayFirst(firstCard)
  displaySecond(secondCard)
  displayThird(thirdCard)
})
}


    
//functions to display meaning of first random card.
function displayFirst(firstCard) {
  const $image = $('<img>')
  $image.attr('src', firstCard.image)
  $mainContent.append($image)
  const $cardPast = $('<div>')
  $cardPast.addClass('past')
  $cardPast.text(firstCard.meaning_up)
  $mainContent.append($cardPast)
}

function displaySecond(secondCard) {
  const $image2 = $('<img>')
  $image2.attr('src', secondCard.image)
  $mainContent.append($image2)
  const $cardPresent = $('<div>')
  $cardPresent.addClass('present')
  $cardPresent.text(secondCard.meaning_up)
  $mainContent.append($cardPresent)
}

function displayThird(thirdCard) {
  const $image3 = $('<img>')
  $image3.attr('src', thirdCard.image)
  $mainContent.append($image3)
  const $cardFuture = $('<div>')
  $cardFuture.addClass('future')
  $cardFuture.text(thirdCard.meaning_up)
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