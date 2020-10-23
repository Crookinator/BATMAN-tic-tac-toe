'use strict' 

const store = require('../store')
const config = require('../config')
const gameUi = require('./ui')
// gets the games object
const gameIndex = function () {
  return $.ajax({
    url: config.apiUrl + '/games',
			headers: {
      Authorization: 'Bearer ' + store.user.token
    },
		method: 'GET',
  })
}

const gameCreate = function () {
	return $.ajax({
		url: config.apiUrl + '/games',
		headers: {
			Authorization: 'Bearer ' + store.user.token
		},
		method: 'POST'
	})
}

const gameUpdate = function (index, currentPlayer, isOver) {
  return $.ajax({
    url: config.apiUrl + '/games/' + store.game._id,
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: {
      game: {
        cell: {
          index: index,
          value: currentPlayer
        },
        over: isOver
      }
    }
  })
}

const gameShow = function () {
  return $.ajax({
    url: config.apiUrl + '/games' + store.game._id,
			headers: {
      Authorization: 'Bearer ' + store.user.token
    },
		method: 'GET',
  })
}


module.exports = {
	gameIndex,
	gameCreate,
	gameUpdate,
	gameShow

}