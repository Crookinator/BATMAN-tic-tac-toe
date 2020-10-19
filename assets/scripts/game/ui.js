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

const onIndexSuccess = (res) => {
	inGameUi()
	console.log('response is ' + res)

}

const onError = function (error) {
	console.log('error is ' + error)
}
module.exports = {
	inGameUi,
	onIndexSuccess,
	onError
}