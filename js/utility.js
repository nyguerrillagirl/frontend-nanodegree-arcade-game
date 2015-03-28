

// Utility Functions...........................................................
function getRandomNumber(low, high) {
	return Math.floor((Math.random() * high) + low);
}


// Frogger Game Specifics......................................................
var Frogger = {
	// Number of enemies in a row
	NUM_ENEMIES: 2,		// Want a harder game set to 3!

	// Enemy row location
	ROW1_Y: 60,
	ROW2_Y: 146,
	ROW3_Y: 226,

	// Player dimensions	
	PLAYER_WIDTH: 101,
	PLAYER_HEIGHT: 171,
	PLAYER_WON_Y_LOCATION: -40,

	// Dimensions required for collision detection
	PLAYER_X_RECT_OFFSET: 18,
	PLAYER_Y_RECT_OFFSET: 90,
	PLAYER_ACTUAL_IMAGE_WIDTH: 66,
	PLAYER_ACTUAL_IMAGE_HEIGHT: 44,


	// Distance player moves up or down in the field of play
	PLAYER_MOVE_Y: 83,	

	//Enemy dimensions (used for collision detection)
	ENEMY_X_RECT_OFFSET: 4,
	ENEMY_Y_RECT_OFFSET: 78,
	ENEMY_ACTUAL_IMAGE_HEIGHT: 64,
	ENEMY_ACTUAL_IMAGE_WIDTH: 94,

	CANVAS_WIDTH: 505,
	CANVAS_HEIGHT: 606,

	// Indicates user won or lost or their lives!
	gameOver : false,

	// Manages the game pauses
	paused: false,
	PAUSED_CHECK_INTERVAL: 200,

	restoredFromPause: false,

	togglePaused: function() {
		this.paused = !this.paused;
	}


};

// Used by objects that are involved in collision detection
var Rectangle = function(x, y, w, h) {

	this.topX = x;
	this.topY = y;
	this.width = w;
	this.height = h;


};

Rectangle.prototype.doRectsCollide = function(anotherRect) {
		if (this.topX < anotherRect.topX + anotherRect.width &&
			this.topX + this.width > anotherRect.topX &&
			this.topY < anotherRect.topY + anotherRect.height &&
			this.height + this.topY > anotherRect.topY) {
			return true;
		}
		return false;
};
// set up the game to pause if window loses focus
window.onblur = function() {
	if (!Frogger.paused) {
		Frogger.togglePaused();
	}
};

// resume the game if window regains focus
window.onfocus = function() {
	Frogger.restoredFromPause = true;
	if (Frogger.paused) {
		Frogger.togglePaused();
	}
};