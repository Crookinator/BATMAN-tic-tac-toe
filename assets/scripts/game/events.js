'use strict'
const gameApi = require('./api')
const gameUi = require('./ui')
const store = require('../store')


// set isOver to false
let isOver = false
	
// set current player
let currentPlayer = 'X'

// box click event handler
const onBoxClick = (event) => {

// use event.target to select the specific box clicked
const box = $(event.target)

//disable future clicks on box and set a class of clicked 
$(box).prop('disabled', true)
$(box).addClass('clicked')

// set text inside box to current players value
box.text(currentPlayer)

//set store.game.cells to above move 
store.game.cells[box.data('cell-index')] = currentPlayer

//set boolean for tie
let notTie = store.game.cells.includes('')
//if statement to prove boolean
if (notTie === false) {
	isTie = true
	isOver = true
}




//pass box[index], currentPlayer, and over to gameUpdate
gameApi.gameUpdate(box.data('cell-index'), currentPlayer, false)
.then(gameUi.onUpdateSuccess)
.catch(gameUi.onError)

//ternary opporator to switch currentPlayer between X and O
currentPlayer = currentPlayer === 'O' ? 'X' : 'O'
}

// when play is clicked
const onPlay = (event) => {
	event.preventDefault()
	gameApi.gameIndex()
		.then(gameUi.onIndexSuccess)
		.catch(gameUi.onError)
}

// when Start New Game is clicked
const onStart = (event) => {
	event.preventDefault()
	
	gameApi.gameCreate()
		.then(gameUi.onCreateSuccess)
		.catch(gameUi.onError)

	
}



module.exports = {
	onBoxClick,
	onPlay,
	onStart
}
