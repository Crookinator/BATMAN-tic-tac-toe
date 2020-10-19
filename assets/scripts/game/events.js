'use strict'
const gameApi = require('./api')
const gameUi = require('./ui')



// set current player
let currentPlayer = 'X'

// box click event handler
 const onBoxClick = (event) => {
	 console.log('click')
	// use event.target to select the specific box clicked
	const box = $(event.target)
	// set text inside box to current players value
	box.text(currentPlayer)
	box.css('background', 'transparent').text(currentPlayer)
	// Change the current player
	currentPlayer = currentPlayer === 'O' ? 'X' : 'O'
 }

const onPlay = (event) => {
	event.preventDefault()
	gameApi.gameIndex()
	.then(gameUi.onIndexSuccess)
	.catch(gameUi.onError)
}

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