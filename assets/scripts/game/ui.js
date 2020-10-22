'Use Strict'
// require store 
const store = require('../store')
let turn = true
// set a variable for number of games played
let gamesPlayed

// the in-game status for the forms from authentication
const inGameUi = () => {
	$('#userAlert').text('You have played ' + gamesPlayed + ' games. click Start New Game.')
	$('#startNewGame').show()
	$('#showChangePassword').show()
	$('#signOutForm').show()
	$('#changePasswordForm').hide()
	$('#signUpForm').hide()
	$('#signInForm').hide()
	$('#showSignUp').hide()
}

// what happens with a successful index request
const onIndexSuccess = (res) => {
	//set gamesPlayed to res.games.length to get the total games played
	gamesPlayed = res.games.length
	// set the in game view
	$('#userAlert').text('You have played ' + gamesPlayed + ' games. click Start New Game.')
	$('#gamePlay').text('Get Games Played')
	$('#startNewGame').show()
	$('#signOutForm').show()
	$('#changePasswordForm').hide()
	$('#showChangePassword').show()
	$('#signUpForm').hide()
	$('#signInForm').hide()
}

// what happens on successful create / POST request 
const onCreateSuccess = res => {
		store.game = res.game
	turn = true
	$('#userAlert').text('New game started. Batman is always X, and X, goes first.')
	$('#gameBoard').show()
	
	//reset buttons on game board to clickable
$('.clicked').prop('disabled', false)
	$('.clicked').text('')	
}

// what happens on successful update or PATCH request
const onUpdateSuccess = (res) => {
	store.game = res.game
	turn = !turn
const player = turn ? 'X':'O'
	$('#userAlert').text(`It is time for ${player} to move`)
	return turn
}

// what happens on successful GET request of specific game._id
const onShowSuccess = res => {
	//set the store to the updated game
	store.game = res.game
	 (store.game)
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