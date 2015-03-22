

// Utility Functions...........................................................
function getRandomNumber(low, high) {
	return Math.floor((Math.random() * high) + low);
}


// Game globals................................................................
var Frogger = {
	NUM_ENEMIES: 3,
	PLAYER_WIDTH: 101,
	PLAYER_HEIGHT: 171,
	CANVAS_WIDTH: 505,
	CANVAS_HEIGHT: 606,
	PLAYER_MOVE_Y: 83,	


	// Enemy row location
	ROW1_Y:60,
	ROW2_Y:146,
	ROW3_Y: 226,

	// Manages the game pauses
	paused: false,
	PAUSED_CHECK_INTERVAL: 200,

	restoredFromPause: false,

	togglePaused: function() {
		this.paused = !this.paused;
	}	
};


// set up the game to pause if window loses focus
window.onblur = function() {
	if (!Frogger.paused) {
		Frogger.togglePaused();
	}
};

// resume the game if window regains focus
window.onfocus = function() {
	console.log("LET THE GAMES BEGIN!!!");
	Frogger.restoredFromPause = true;
	if (Frogger.paused) {
		Frogger.togglePaused();
	}
};