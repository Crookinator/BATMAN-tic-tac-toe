'use strict'
const gameApi = require('./api')
const gameUi = require('./ui')
const store = require('../store')
// set an object to track the games progress
let gameState = {
	moves: 0,
	isOver: false,
	winner: ''
}
// set current player
let currentPlayer = 'X'

// function to check for a winner
const checkWin = function (arr) {
    if (gameState.moves >= 5) {
	for (let i = 0; i <= arr.length; i++) {
		if (arr[0] === arr[1] && arr[1] === arr[2] && arr[0] !== '') {
            gameState.winner = arr[0]
			gameState.isOver = true
			return gameState
		} else if (arr[3] === arr[4] && arr[3] === arr[5] && arr[3] !== '') {
            gameState.winner = arr[3]
			gameState.isOver = true
			return gameState
		} else if (arr[6] === arr[7] && arr[7] === arr[8] && arr[6] !== '') {
            gameState.winner = arr[6]
			gameState.isOver = true
			return gameState
		} else if (arr[0] === arr[3] && arr[3] === arr[6] && arr[0] !== '') {
            gameState.winner = arr[0]
			gameState.isOver = true
			return gameState
		} else if (arr[1] === arr[4] && arr[1] === arr[7] && arr[1] !== '') {
            gameState.winner = arr[1]
			gameState.isOver = true
			return gameState
		} else if (arr[2] === arr[5] && arr[2] === arr[8] && arr[2] !== '') {
            gameState.winner = arr[2]
			gameState.isOver = true
			return gameState
		} else if (arr[0] === arr[4] && arr[0] === arr[8] && arr[0] !== '') {
            gameState.winner = arr[0]
			gameState.isOver = true
			return gameState
		} else if (arr[2] === arr[4] && arr[4] === arr[6] && arr[2] !== '') {
            gameState.winner = arr[2]
			gameState.isOver = true
			return gameState
		} else {
            if (gameState.moves === 9) {
              gameState.winner = 'Tie'
              gameState.isOver = true
              return gameState
            }else {
            	return gameState
            }
		}
	}
	}
}

// box click event handler
const onBoxClick = (event) => {
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
		checkWin(store.game.cells)
			if (gameState.isOver === true) {
				$('#gameBoard button').prop('disabled', true)
				$('#gameBoard button').addClass('clicked')
				if (gameState.winner === 'X') {
					$('#userAlert').text(`Batman defeats Joker once again!`)
					$('#iAmBatman').get(0).play()
				} else if (gameState.winner === 'O') {
					$('#userAlert').text('Looks like Batman finally met his match')
					$('#jokerLaugh').get(0).play()
				} else if (gameState.moves === 9) {
					gameState.isOver = true
					$('#userAlert').text('It is a Tie')
				}
				return
			}
		})
.catch(gameUi.onError)
return gameState		
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

// function to show change password 
const showChangePassword = event => {
	$('userAlert').text('Change Password')
	$('#changePasswordForm').show()
	$('#gameBoard').hide()
	$('#inGameUi').hide()
}



module.exports = {
	onBoxClick,
	onPlay,
	onStart,
	showChangePassword
}