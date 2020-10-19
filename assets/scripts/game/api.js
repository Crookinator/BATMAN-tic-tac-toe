'use strict'
const store = require('../store')
const config = require('../config')

// gets the games object
const gameIndex = function () {
  return $.ajax({
    url: config.apiUrl + '/games',
			headers: {
      Authorization: 'Bearer ' + store.user.token
    },
		method: 'GET',
  })
	console.log('getting game index')
}

const gameCreate = function () {
	return $.ajax({
		url: config.apiUrl + '/games',
		headers: {
			Authorization: 'Bearer ' + store.user.token
		},
		method: 'POST'
	})
	console.log('api working')
}

module.exports = {
	gameIndex,
	gameCreate

}