'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require('./authentication/events')
const uiAuth = require('./authentication/ui')
const gameUi = require('./game/ui')


$(() => {
	//function to reset the forms back to the log in screen
	uiAuth.resetForms()
	//event listeners for the various form buttons
	$('#signUpForm').on('submit', authEvents.onSignUp)
	$('#signInForm').on('submit', authEvents.onSignIn)
	$('#changePasswordForm').on('submit', authEvents.onChangePassword)
	$('#signOutForm').on('submit', authEvents.onSignOut)
	$('#showSignUp').on('click', uiAuth.onShowSignUp)
	$('#showSignIn').on('click', uiAuth.resetForms)
	
	//in game event listeners
	$('#playGame').on('click',gameUi.inGameUi)
})
