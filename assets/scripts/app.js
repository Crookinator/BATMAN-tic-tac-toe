'use strict'



// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require('./authentication/events')
const uiAuth = require('./authentication/ui')
const gameUi = require('./game/ui')
const gameEvents = require('./game/events')


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
	$('#formHomeBtn').on('click', event=> {
		event.preventDefault()
		$('#userAlert').text('You are at the Home screen.')
		$('#inGameUi').show()
		$('#changePasswordForm').hide()
	})
	$('#uiHomeBtn').on('click', event => {
		event.preventDefault()
		$('#userAlert').text('You are on the Home screen.')
		$('#gameBoard').hide()
		$('#inGameUi').show()
	})
	$('#playGame').on('click', gameEvents.onPlay)
	$('#startNewGame').on('click', gameEvents.onStart)
	$('.box').on('click', gameEvents.onBoxClick)
	$('#showChangePassword').on('click', gameEvents.showChangePassword)
})
