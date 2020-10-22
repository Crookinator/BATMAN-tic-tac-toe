'use strict'

const store = require('./../store')

// what happens when the sign up is successful
const signUpSuccess = function(response) {
	$("#userAlert").text('Thanks ' + response.user.email + ' Your sign up was successful! Please sign in to play.')
	$('#startNewGame').hide()
	$('#changePasswordForm').hide()
	$('#gameBoard').hide()
	$('#playGame').hide()
	$('#playGame').text('Play')
	$('#signOutForm').hide()
	$('#showSignIn').hide()
	$('#changePasswordForm').hide()
	$('#signUpForm').hide()
	$('#signInForm').show().trigger('reset')
	$('#showChangePassword').hide()
}

// what happens with a sign up failure
const signUpFailure = function(error) {
  $("#userAlert").text('Error: Sign up failed! Please try again.')
	$('#signUpForm').trigger('reset')
}

// what happens when there is a successful sign in 
const signInSuccess = function(response) {
  $("#userAlert").text('Sign in Successful! Click the Get All Games button to see total games played & start new game.')
  // save the user in the api response to the store object
  store.user = response.user
  //play theme song!
	$('#batmanTheme').show()
	$('#batmanTheme').get(0).play()
	$('#showSignUp').hide()
  $('#showChangePassword').show()
	$('#signOutForm').show()
  $('#signUpForm').hide()
  $('#signInForm').hide().trigger('reset')
	$('#playGame').show()
	
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
	$('#showChangePassword').show('Change Password')
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
	$('#startNewGame').hide()
	$('#changePasswordForm').hide()
	$('#gameBoard').hide()
	$('#playGame').hide()
	$('#playGame').text('Play')
	$('#signOutForm').hide()
	$('#showSignIn').hide()
	$('#changePasswordForm').hide()
	$('#signUpForm').hide()
	$('#signInForm').show().trigger('reset')
	$('#showChangePassword').hide()
	$('#batmanTheme').hide()
}

// function to show the sign up form
const onShowSignUp = () => {
	$('#userAlert').text('Please sign up below.')
	$('#showSignUp').hide()
	$('#playGame').hide()
	$('#signOutForm').hide()
	$('#changePasswordForm').hide()
	$('#signUpForm').show().trigger('reset')
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