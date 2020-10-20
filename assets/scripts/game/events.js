'use strict'
const gameApi = require('./api')
const gameUi = require('./ui')
const store = require('../store')



// set the winning combinations to an array
const winningCombos = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6]
]

// set over to false
let over = false
	
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
	
	// logic for game over or tie
		let tie = store.game.cells.includes('')
	if (store.game.cells.slice(0, 3).every(e => e === currentPlayer)) {
		console.log('its working')
		over = true
		}
		//pass box[index], currentPlayer, and over to gameUpdate
	gameApi.gameUpdate(box.data('cell-index'), currentPlayer, false)
		.then(gameUi.onUpdateSuccess)
		.catch(gameUi.onError)
	
	if (!tie === true) {
				$('#userAlert').text("It's a tie!")
			}else if (over === true) {
				$('#userAlert').text(currentPlayer + ' WINS!... Want to play again? click Start New Game')
			}else {
				//ternary opporator to switch currentPlayer between X and O
				currentPlayer = currentPlayer === 'O' ? 'X' : 'O'
			}
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
