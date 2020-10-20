'use strict'
const gameApi = require('./api')
const gameUi = require('./ui')
const store = require('../store')
// set isOver to false
let gameState = {
	moves: 0,
	isOver: false,
	winner: ''
}
// set current player
let currentPlayer = 'X'
const checkWin = function (arr) {
	console.log('inside checkWin', arr, gameState.moves)
    if (gameState.moves > 5) {
    	
	for (let i = 0; i <= arr.length; i++) {
		if (arr[0] === arr[1] && arr[1] === arr[2]) {
            gameState.winner = arr[0]
			gameState.isOver = true
			return gameState
		} else if (arr[3] === arr[4] && arr[3] === arr[5]) {
            gameState.winner = arr[3]
			gameState.isOver = true
			return gameState
		} else if (arr[6] === arr[7] && arr[7] === arr[8]) {
            gameState.winner = arr[6]
			gameState.isOver = true
			return gameState
		} else if (arr[0] === arr[3] && arr[3] === arr[6]) {
            gameState.winner = arr[0]
			gameState.isOver = true
			return gameState
		} else if (arr[1] === arr[4] && arr[1] === arr[7]) {
            gameState.winner = arr[1]
			gameState.isOver = true
			return gameState
		} else if (arr[2] === arr[5] && arr[2] === arr[8]) {
            gameState.winner = arr[2]
			gameState.isOver = true
			return gameState
		} else if (arr[0] === arr[4] && arr[0] === arr[8]) {
            gameState.winner = arr[0]
			gameState.isOver = true
			return gameState
		} else if (arr[2] === arr[4] && arr[4] === arr[6]) {
            gameState.winner = arr[2]
			gameState.isOver = true
			return gameState
		} else {
            if (gameState.moves === 9) {
              gameState.winner = 'Tie'
              gameState.isOver = true
              return gameState
            }
						return 
		}
	}
	}
}
// box click event handler
const onBoxClick = (event) => {

checkWin(store.game.cells)
console.log(gameState.moves)	
	if (gameState.isOver === true) {
		$('#userAlert').text(`Winner is ${gameState.winner}`)
		return
	} else {
// use event.target to select the specific box clicked
const box = $(event.target)
//disable future clicks on box and set a class of clicked 
$(box).prop('disabled', true)
$(box).addClass('clicked')
// set text inside box to current players value
box.text(currentPlayer)
//pass box[index], currentPlayer, and over to gameUpdate
gameApi.gameUpdate(box.data('cell-index'), currentPlayer, gameState.isOver)
.then(gameUi.onUpdateSuccess)
		.then(()=> {
//ternary opporator to switch currentPlayer between X and O
currentPlayer = currentPlayer === 'O' ? 'X' : 'O'
gameState.moves++
console.log(gameState)			
		checkWin(store.game.cells)
			if (gameState.isOver === true) {
				$('#userAlert').text(`Winner is ${gameState.winner}`)
				return
			} 
			
		})
.catch(gameUi.onError)
return gameState		
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
	 gameState = {
		moves: 0,
		isOver: false,
		winner: ''
	}
	currentPlayer = 'X'
	gameApi.gameCreate()
		.then(gameUi.onCreateSuccess)
		.catch(gameUi.onError)
}
module.exports = {
	onBoxClick,
	onPlay,
	onStart
}