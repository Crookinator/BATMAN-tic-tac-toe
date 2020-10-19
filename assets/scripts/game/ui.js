'Use Strict'

const inGameUi = () => {
	$('#userAlert').text('New Game Started!')
	$('#gameBoard').show()
	$('#playGame').hide()
	$('#signOutForm').show()
	$('#changePasswordForm').hide()
	$('#signUpForm').hide()
	$('#signInForm').hide()
	$('#showSignUp').hide()
}

const onGameSuccess = (res) => {
	console.log('response is ' + res)

}

module.exports = {
	inGameUi
}