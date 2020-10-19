'Use Strict'
// require store 
const store = require('../store')

// set a variable for number of games played
let gamesPlayed

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

const onIndexSuccess = (res) => {
	//set games to a key on store
	store.games = res.games
	//set gamesPlayed to store.games
	gamesPlayed = store.games.length
	//call the inGameUi
	inGameUi()
}

const onCreateSuccess = () => {
	$('#userAlert').text('New game started. X goes first.')
	$('#gameBoard').show()
}

const onError = error => {
	$('#userAlert').text('Error, please try again.')
}


module.exports = {
	inGameUi,
	onIndexSuccess,
	onCreateSuccess,
	onError
}