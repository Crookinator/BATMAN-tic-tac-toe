Wire Frame aka Description of app!

Browser:
Log-in / sign-up view:
	>browser loads with username and password fields
	>submit button
	>sign up button below sign in button
	> Form should be centered in page
	>In upper left corner (in header) a heading with the name of the game and a quick blerb about the game.

Game view:
	>centered 3x3 grid 
	>button for start game
	>Log out button should appear
	>Header text should change to something like "let's play!"
	
Winner / Tie:
	>if either 3 in a row or all 9 full
	>Display winner / tie in header text
	>button appears for start new game
	>button appears for cancel

Mobile:
Log-in / sign-up form:
	>sign in form should be edge to edge
	>sign in button below form fields
	>sign up button below sign in button
	>Same text in header but H1 will be centered at top with blurb centered below that

Start game view:
	>Name of game
	>button that says start game

Game board:
	>header changes to Lets play
	>3x3 grid each box a different div with event listener
	>button at the bottom to reset game
	
Game complete:
	>when either 3 in a row or all squares filled 
	>Display game over with either a winner or tie
	>button appears for restart game
	>button appears for cancel

Game Board:with the board, and the logic that will be required to determine when the game is over.
Game board will be 3x3 grid. Each section will be clickable so I'll need them to each have unique IDs in order to pass click events. 
I'll store options in a gameBoard object. I'll need to have some kind of if/else or loop or both to check for 3 in a row or all 9 places being filled. I'll also need buttons to reset the events to play again. I'll need to use Math.random() to randomize the computer choices for the game. 

Approach:
I plan to get the html together first in order to see that the front end display is working. then I intend on adding logic to existing IDs or elements in the html. Then event listeners will be added, and corresponding logic will be added to listeners and handlers as project builds out. 

User Stories:
As a user, I would like to sign up
As a user I'd like to sign back in
As user, I'd like to play tic-tac-toe against myself 
As a user I'd like to have the game accessible
	>As a user, I'd like to keep track of number of games played
As a user, I'd like to log out
	>As a user, I'd like to be able to change password

Plan for modularity:
I plan to section the html, css, and also modulate the JS files to their different functions i.e. event listeners in one file, event handlers in another, and so on. I will also section off different parts of the JS for different actions i.e. authentication will be in one directory and normal game functionality in another. 

Creativity:
Instead of X and O I'd like to have two different pictures one of a hero and one of a villain.

Version Control:
Every time I have completed a section, no matter how small, I will git add and git commit. Once my html is set up for example I'll git add and commit that change. If I have a successful event listener I'll do another, and so on. 

Additional features (time permitted)
Would love to make the app fully accessible to ensure anyone can play. Would like to add a button that will read out the current landscape of the game board. i.e. on button click screen reader will say A1, A2, B3, are filled with Xs. C1, C2, are filled with Os. would like to have some kind of theme chooser i.e. dark theme, light theme, or colorful theme.
