# Description of Game
## Log-in / sign-up view:
	 * browser loads with username and password fields
	* submit button
	* sign up button below sign in button
	* Form should be centered in page
	* In the Header a heading with the name of the game and a quick blerb about the game.

## Game view:
	* centered 3x3 grid 
	* button for start game
	* Log out button should appear
	* H3 heading updates game state
	* Styling is inspired from the Batman animated series from the mid 1990's
	
## Winner / Tie:
	* if either 3 in a row or all 9 full
	* Display winner / tie in game state section text
	* button appears for start new game
	* button for sign out
	* Winner has special sound clip

# Approach:
I plan to get the html together first in order to see that the front end display is working. then I intend on adding logic to existing IDs or elements in the html. Then event listeners will be added, and corresponding logic will be added to listeners and handlers as project builds out. 

# User Stories:
	* As a user, I would like to sign up
	* As a user I'd like to sign back in
	* As a user, I'd like to play tic-tac-toe against myself 
	* As a user I'd like to have the game accessible
	* As a user, I'd like to keep track of number of games played
	* As a user, I'd like to log out
	* As a user, I'd like to be able to change password

## Plan for modularity:
I sectioned the html, css, and also modulated the JS files to their different functions i.e. event listeners in one file, event handlers in another, and so on. I also sectioned off different parts of the JS for different actions i.e. authentication will be in one directory and normal game functionality in another. 

## Creativity:
	* Themed the game around Batman the Animated Series
	* Added a soundtrack that plays when log in occures
	* Added a Bat Cave skin to the background of the game board
	* The winner of the game will get a special sound played

## Version Control:
	* Through out this build I utilized GIT
	* GIT stored various build heads and commits
	* Pushed completed sections of the build to GIT HUB
	* Merged all relevant functionality into the master branch for deployment

## Additional features:
	*Screen Reader Accessible

# Languages Used
	* html
	* java script
	* css with bootstrap
	* textmate (editor)