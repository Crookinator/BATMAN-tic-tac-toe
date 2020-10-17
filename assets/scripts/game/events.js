'use strict'
// set current player
let currentPlayer = 'X'

// box click event handler
 const onBoxClick = (event) => {
	 console.log('click')
	// use event.target to select the specific box clicked
	const box = $(event.target)
	// set text inside box to current players value
	box.text(currentPlayer)
	box.css('background', 'transparent').text(currentPlayer)
	// Change the current player
	currentPlayer = currentPlayer === 'O' ? '✕' : 'O'
 }

module.exports = {
	onBoxClick
}