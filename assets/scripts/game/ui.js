'Use Strict'
// require store 
const store = require('../store')
const gameevents = require('./events')

// set a variable for number of games played
let gamesPlayed

// the in-game status for the forms from authentication
const inGameUi = () => {
	$('#userAlert').text('You have played ' + gamesPlayed + ' games. click Start New Game.')
	$('#startNewGame').show()
	$('#playGame').hide()
	$('#signOutForm').show()
	$('#changePasswordForm').hide()
	$('#signUpForm').hide()
	$('#signInForm').hide()
	$('#showSignUp').hide()
}

// what happens with a successful index request
const onIndexSuccess = (res) => {
	//set gamesPlayed to res.games
	gamesPlayed = res.games.length
	//call the inGameUi
	inGameUi()
}

// what happens on successful create / POST request 
const onCreateSuccess = res => {
		store.game = res.game
	$('#userAlert').text('New game started. X goes first.')
	$('#gameBoard').show()
	
	//reset buttons on game board to clickable
$('.clicked').prop('disabled', false)
	$('.clicked').text('')	
}

// what happens on successful update or PATCH request
const onUpdateSuccess = (res) => {
	store.game = res.game
	if (store.game.isOver === true && gameEvents.isTie === true) {
		$('#gameBoard').hide()
		$('#userAlert').text('TIE GAME! Click Start New Game to keep playing.')
	} else if (store.game.isOver === true) {
		$('#gameBoard').hide()
		$('#userAlert').text(gameEvents.currentPlayer + 'WINS! Click Start New Game to play again.') 
	} else {
		gameEvents.currentPlayer = gameEvents.currentPlayer === 'O' ? 'X' : 'O'
		
		$('#userAlert').text(gameEvents.currentPlayer + "'s turn.")
	}
}

// what happens on successful GET request of specific game._id
const onShowSuccess = res => {
	//set the store to the updated game
	store.game = res.game
	console.log(store.game)
}

// error message for any error in processing above requests
const onError = error => {
	$('#userAlert').text('Error, please try again.')
}


module.exports = {
	inGameUi,
	onIndexSuccess,
	onCreateSuccess,
	onUpdateSuccess,
	onShowSuccess,
	onError
}