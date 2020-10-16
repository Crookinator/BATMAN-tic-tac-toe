'Use Strict'

const inGameUi = () => {
	$('#playGame').hide()
	$('#signOutForm').show()
	$('#changePasswordForm').show()
	$('#signUpForm').hide()
	$('#signInForm').hide()
	$('#gameBoard').show()
}

module.exports = {
	inGameUi
}