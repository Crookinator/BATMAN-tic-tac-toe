'use strict'
const store = require('../store')
const config = require('../config')

// gets the games object
const gameIndex = () => {
	return $.ajax({
		url: config.apiUrl + '/games',
		headers: {
			Authorization: 'Bearer ' + store.user.token
		}
	})
}

module.exports = {
	gameIndex
}