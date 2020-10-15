'use strict'

const store = require('./../store')

const signUpSuccess = function(response) {
  $("#userAlert").text('Thanks ' + response.user.email + ' Your sign up was successful! Please sign in to play.')
}

const signUpFailure = function(error) {
  $("#userAlert").text('Error: Sign up failed! Please try again.')
}

const signInSuccess = function(response) {
  $("#userAlert").text('Sign in Successful! Click "Play"!')
  // save the user in the api response to the store object
  store.user = response.user
  $('#changePasswordForm').show()
  $('#signOutForm').show()
  $('#signUpForm').hide()
  $('#signInForm').hide()
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
	$('#signOutForm').hide()
	$('#changePasswordForm').hide()
	$('#signUpForm').hide()
	$('#signInForm').show()
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure,
	resetForms
}