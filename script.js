const URL = 'https://rws-cards-api.herokuapp.com/api/v1/cards/random?n=3'
$.ajax(URL).then(function(data) {
    console.log(data)
})
// (error) => {
//     console.log('bad request', error);
// });

// let cards;

//connect the api with AJAX
//create event listener for button
//deal cards on click
//show images for 3 cards
//link api definitions 
//show definitions on hover

