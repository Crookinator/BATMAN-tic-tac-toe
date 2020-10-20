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
	//set gamesPlayed to res.games
	gamesPlayed = res.games.length
	//call the inGameUi
	inGameUi()
}

const onCreateSuccess = res => {
		store.game = res.game
	$('#userAlert').text('New game started. X goes first.')
	$('#gameBoard').show()
	
	//reset buttons on game board to clickable
$('.clicked').prop('disabled', false)
	$('.clicked').text('')	
}

const onUpdateSuccess = (res) => {
	$('#userAlert').text('Nice move!') 
	store.game = res.game
}

const onShowSuccess = res => {
	//set the store to the updated game
	store.game = res.game
	console.log(store.game)
}

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