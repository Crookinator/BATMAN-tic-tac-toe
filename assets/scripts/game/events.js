'use strict'
const gameApi = require('./api')
const gameUi = require('./ui')
const store = require('../store')


// set current player
let currentPlayer = 'X'

// box click event handler
const onBoxClick = (event) => {
	// use event.target to select the specific box clicked
	const box = $(event.target)
	// set text inside box to current players value
	box.text(currentPlayer)
	
	//pass index, currentPlayer, and over  to gameUpdate
	gameApi.gameUpdate(box.data('cell-index'), currentPlayer, false)
	.then(gameUi.onUpdateSuccess)
	.catch(gameUi.onError)
	//update store with gameShow
	// gameApi.gameShow()
	// .then(console.log(res.game))
	// .catch(gameUi.onError)
	
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