# Description of app

## Log-in / Sign-up:
	- browser loads with username and password fields
	- Submit button
	- sign up button below sign in button
	- Header with a heading with the name of the game and a quick description.

## Game view:
	- 3x3 grid 
	- button for start game
	- Log out button should appear
	- User alert field for game state changes.
	
## Winner / Tie:
	- if either 3 in a row or all 9 full
	- Display winner / tie in user alert field.
	- button for start new game
	- button for log out

# Game Board
## Logic for the game
 Game board is a3x3 grid. Each section is a clickable button. Each button has a unique data-cell-index for tracking the game logic. The board is wrapped in a section tag with a unique id attached so that I could pass click events to event handler functions. 
I stored the game state in a gameState object that I refer to thoughout the code. I created a function for checking the winner with some if/else conditions. This function compares the boards current played spaces against 8 possible winning combinations as well as checks for a tie by having all spaces filled without a winner. I also included code in the click event for each button to switch it to a disabled state and add a class of clicked. This allowed me to target all the buttons at once when a user clicked the start new game button. 

## Approach:
I put the html together first in order to see that the front end display is working. I then started to setup uthe authentication through the api. Afterwords I included the game logic, board, and api calls to update the game information. 

## User Stories:
	- As a user, I would like to sign up
	- As a user I'd like to sign back in
	- As a user, I'd like to play tic-tac-toe against myself 
	- As a user I'd like to have the game accessible via screen reader
	- As a user, I'd like to keep track of number of games played
	- As a user, I'd like to log out
	- As a user, I'd like to be able to change my password

## Plan for modularity:
I sectioned the html, css, and also modulated the JS files to their different functions i.e. event listeners in one file, event handlers in another, and so on. I also sectioned off different parts of the JS for different actions i.e. authentication will be in one directory and normal game functionality in another. 

## Creativity:
	- Themed the UI arround the 1990's Batman cartoon
	- Included the theme for that cartoon as the in-game theme
	- The theme auto-plays upon successful sign-in
	- Winning moves have an auto-playing victory sound
	- The background of the game board is the Bat Cave
	- Colors are similar to the Batsuit from the cartoon

## Version Control:
Every time I completed a section, no matter how small, I performed a  git add and git commit. Once I had a successful event listener I also would do another commit.

# Additional features
	- Fully screen reader accessible

# Languages & Tools Used
			- HTML
	- CSS with Bootstrap
	- JS
	- Textmate (editor)
	- API from Heroku 