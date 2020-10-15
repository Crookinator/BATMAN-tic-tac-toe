'use strict'
const getFormFields = require('./../../../lib/get-form-fields')
const ui = require('./ui')
const api = require('./api')

const onSignUp = function (event) {
		event.preventDefault()
		console.log('Sign up firing')
}

const onSignIn = function (event) {
	event.preventDefault()
	console.log('sign in firing')
}

const onSignOut = function (event) {
	event.preventDefault()
	console.log('sign out firing')
}

const onChangePassword = function (event) {
	event.preventDefault()
	console.log('change password firing')
}


module.exports = {
	onSignUp,
	onSignIn,
	onSignOut,
	onChangePassword
}