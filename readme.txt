Frogger Clone - Get Mindy to the Water!
=======================================
You play the role of Mindy, the damsal with not much to do today other than to see how many
times she can get to the water as she dodges bugs that seem to get faster and faster the more 
times she crosses over to the water

How to Install and Start the Game
=================================
1. The game is located online to play at  http://nyguerrillagirl.github.io/froggerProject/index.html

If you manage to lose all your lives you can re-start the game by refreshing the page.

Alternatively:
You can also clone the GitHub repository located at https://github.com/nyguerrillagirl/frontend-nanodegree-arcade-game and start playing by opening up the file index.html in your favorite web browser.


How to Play
===========													^
Use the arrow keys to move Mindy -> right, <- left, | forward or | down.
																 V

Every arrow key press moves Mindy to the next game grid.  When she reaches the water you will hear a victory sound effect and Mindy will be placed to the starting point to retry her luck against faster bugs.
If Mindy enters a grid with a a bug or a bug enters the occupying grid then Mindy will be hit with a fine
and sent to ....no that's another game. If Mindy collides with a bug the game will play a "gotcha" sound effect and Mindy will lose a life and be reset to the start to begin her quest over again.

The heads-up-display shows the number of lives she has left and the number of times (levels) she
has out-witted, out-dodged and out-maneuvered the persistent bugs.

High Score News
===============
The highest level reached so far is level 9. Can you beat that?



Game Design notes
=================
1. Added Game Pause feature.

	When the players moves off the browser tab window the game pauses and resumes when focus returns.

2. Added a new JavaScript file utility.js. The file has one main object Frogger that captures this
	game specifics. 

3. The game provides the user with 3 lives. 

4. The game tracks each time the player reaches the water and increases the game up a level 
	which makes the bugs slightly faster.

5. Added sound effects for when the player reaches the water or collides with a bug.

References:

Websites:

1. HTML5 3D game development: Introducing Snail Bait - http://www.ibm.com/developerworks/library/j-html5-game1/

2. General HTML information - http://www.w3schools.com/

3. Adding sound effects - http://stackoverflow.com/questions/1933969/sound-effects-in-javascript-html5

4. Adding collision detection - https://developer.mozilla.org/en-US/docs/Games/Techniques/2D_collision_detection






