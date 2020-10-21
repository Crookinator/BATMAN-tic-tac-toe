'use strict'

const store = require('./../store')
// what happens when the sign up is successful
const signUpSuccess = function(response) {
  $("#userAlert").text('Thanks ' + response.user.email + ' Your sign up was successful! Please sign in to play.')
	resetForms()

const signUpFailure = function(error) {
  $("#userAlert").text('Error: Sign up failed! Please try again.')
}

const signInSuccess = function(response) {
  $("#userAlert").text('Sign in Successful! Click the Get All Games button to see total games played & start new game.')
  // save the user in the api response to the store object
  store.user = response.user
  //play theme song!
	$('#batmanTheme').get(0).play()
	$('#showSignUp').hide()
  $('#signOutForm').show()
  $('#signUpForm').hide()
  $('#signInForm').hide().trigger('reset')
	$('#playGame').show()
	
}

const signInFailure = function() {
  $("#userAlert").text('sign in failed. Please try again.')
}

const onChangePasswordSuccess = function () {
  $('#userAlert').text('Password changed successfully!')
	$('#changePasswordForm').hide().trigger('reset')
}

const onChangePasswordFailure = function () {
  $('#userAlert').text('Error password change failed. Please try again.')
}

const onSignOutSuccess = function () {
  $('#userAlert').text('Sign out successful. See you next time ' + store.user.email + '!')
  store.user = null
	resetForms()
	$('#showSignUp').show()
	$('#showChangePassword').hide()
}

const onSignOutFailure = function () {
  $('#userAlert').text('Sign out failed')
}

const resetForms = () => {
	$('#userAlert').text('Sign In Below')
	$('#startNewGame').hide()
	$('#changePasswordForm').hide()
	$('#showChangePassword').hide()
	$('#gameBoard').hide()
	$('#playGame').hide()
	$('#playGame').text('Play')
	$('#signOutForm').hide()
	$('#showSignIn').hide()
	$('#changePasswordForm').hide()
	$('#signUpForm').hide()
	$('#signInForm').show().trigger('reset')
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