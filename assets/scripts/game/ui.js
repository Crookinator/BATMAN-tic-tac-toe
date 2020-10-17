'Use Strict'

const inGameUi = () => {
	$('#userAlert').text('New Game Started!')
	$('#gameBoard').show()
	$('#playGame').hide()
	$('#signOutForm').show()
	$('#changePasswordForm').show()
	$('#signUpForm').hide()
	$('#signInForm').hide()
	$('#showSignUp').hide()
}

module.exports = {
	inGameUi
}