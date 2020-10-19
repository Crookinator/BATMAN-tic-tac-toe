'use strict'

const store = require('./../store')

const signUpSuccess = function(response) {
  $("#userAlert").text('Thanks ' + response.user.email + ' Your sign up was successful! Please sign in to play.')
	$('#signInForm').show()
}

const signUpFailure = function(error) {
  $("#userAlert").text('Error: Sign up failed! Please try again.')
}

const signInSuccess = function(response) {
  $("#userAlert").text('Sign in Successful! Click the play button to get started.')
  // save the user in the api response to the store object
  store.user = response.user
  $('#showSignUp').hide()
	$('#changePasswordForm').show()
  $('#signOutForm').show()
  $('#signUpForm').hide()
  $('#signInForm').hide()
	$('#playGame').show()
	
}

const signInFailure = function() {
  $("#userAlert").text('sign in failed. Please try again.')
}

const onChangePasswordSuccess = function () {
  $('#userAlert').text('Password changed successfully!')
}

const onChangePasswordFailure = function () {
  $('#userAlert').text('Error password change failed. Please try again.')
}

const onSignOutSuccess = function () {
  $('#userAlert').text('Sign out successful. See you next time!')
  store.user = null
	resetForms()
}

const onSignOutFailure = function () {
  $('#userAlert').text('Sign out failed')
}

const resetForms = () => {
	$('#userAlert').text('')
	$('#gameBoard').hide()
	$('#playGame').hide()
	$('#signOutForm').hide()
	$('#showSignIn').hide()
	$('#changePasswordForm').hide()
	$('#signUpForm').hide()
	$('#signInForm').show()
}

const onShowSignUp = () => {
	$('#userAlert').text('Please sign up below.')
	$('#showSignUp').hide()
	$('#playGame').hide()
	$('#signOutForm').hide()
	$('#changePasswordForm').hide()
	$('#signUpForm').show()
	$('#signInForm').hide()
	$('#showSignIn').show()
	

}


module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  onChangePasswordSuccess,
	onShowSignUp,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure,
	resetForms
}