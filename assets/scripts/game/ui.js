'Use Strict'

const inGameUi = () => {
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