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

const createGame = function () {
    url: config.apiUrl + '/games',
			headers: {
      Authorization: 'Bearer ' + store.user.token
    },
		body: {}
		method: 'POST',
  })
	console.log('creating game')
}	
}


module.exports = {
	gameIndex
}