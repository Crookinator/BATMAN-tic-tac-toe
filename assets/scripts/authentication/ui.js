'use strict' 


const store = require('./../store')

// what happens when the sign up is successful
const signUpSuccess = function(response) {
	$("#userAlert").text('Thanks ' + response.user.email + ' Your sign up was successful! Please sign in to play.')
	$('#changePasswordForm').hide()
	$('#gameBoard').hide()
	$('#playGame').text('Play')
	$('#signOutForm').hide()
	$('#changePasswordForm').hide()
	$('#signUpForm').hide()
	$('#signInForm').show().trigger('reset')
	$('#inGameUi').hide()
}

// what happens with a sign up failure
const signUpFailure = function(error) {
  $("#userAlert").text('Error: Sign up failed! Please try again.')
	$('#signUpForm').trigger('reset')
}

// what happens when there is a successful sign in 
const signInSuccess = function(response) {
  $("#userAlert").text('Sign in Successful! Click the Get All Games button to see total games played, or click start new game.')
  // save the user in the api response to the store object
  store.user = response.user
  //play theme song!
	$('#batmanTheme').show()
	$('#batmanTheme').get(0).play()
	$('#inGameUi').show()
	$('#signUpForm').hide()
  $('#signInForm').hide().trigger('reset')
}

// what happens with failed sign in
const signInFailure = function() {
  $("#userAlert").text('sign in failed. Please try again.')
	$('#signInForm').trigger('reset')
}

// what happens on successful change password success
const onChangePasswordSuccess = function () {
	$('#userAlert').text('Password changed successfully!')
	$('#changePasswordForm').hide().trigger('reset')
	$('#inGameUi').show()
}

// what happens on failed change password
const onChangePasswordFailure = function () {
  $('#userAlert').text('Error password change failed. Please try again.')
	$('#changePasswordForm').trigger('reset')
}

// on successful sign out
const onSignOutSuccess = function () {
  $('#userAlert').text('Sign out successful. See you next time ' + store.user.email + '!')
  store.user = null
	resetForms()
	$('#showSignUp').show()
}

// when sign out fails
const onSignOutFailure = function () {
  $('#userAlert').text('Sign out failed')
}

// function that resets the forms to default of first load state
const resetForms = () => {
	$('#userAlert').text('')
	$('#changePasswordForm').hide()
	$('#gameBoard').hide()
	$('#changePasswordForm').hide()
	$('#signUpForm').hide()
	$('#signInForm').show().trigger('reset')
	$('#batmanTheme').hide()
	$('#inGameUi').hide()
}

// function to show the sign up form
const onShowSignUp = () => {
	$('#userAlert').text('Please sign up below.')
	$('#signUpForm').show().trigger('reset')
	$('#signInForm').hide()
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