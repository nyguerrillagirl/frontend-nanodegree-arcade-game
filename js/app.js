var NUM_ENEMIES = 3;
var PLAYER_WIDTH = 101;
var PLAYER_HEIGHT = 171;
var CANVAS_WIDTH = 505;
var CANVAS_HEIGHT = 606;
var PLAYER_MOVE_Y = 83;

// Set initial player position to the bottom center of the screen
var INITIAL_PLAYER_X = CANVAS_WIDTH  / 2 - PLAYER_WIDTH / 2;
var INITIAL_PLAYER_Y = 5 * 83 - 40;

// Hold array of enemies
var ROW1_Y = 60;
var ROW2_Y = 146;
var ROW3_Y = 226;
var row1Enemies = new Array();
var row2Enemies = new Array();
var row3Enemies = new Array();

// Enemies our player must avoid
var Enemy = function(ax, ay, aSpeed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    var x;
    var y;
    var speed;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = ax;
    this.y = ay;
    this.speed = aSpeed;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x = this.x + this.speed * dt;
    if (this.x > CANVAS_WIDTH) {
        this.x = -100;
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/char-pink-girl.png';
    this.x = INITIAL_PLAYER_X;
    this.y = INITIAL_PLAYER_Y;
};
Player.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

// Draw the enemy on the screen, required method for game
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
Player.prototype.handleInput = function(strKey) {
    var oldX = this.x;
    var oldY = this.y;
    console.log("oldX: " + oldX);
    console.log("oldY: " + oldY);
    if (strKey === 'left') {
        this.x = this.x - PLAYER_WIDTH;
    }
    if (strKey === 'right') {
        this.x = this.x + PLAYER_WIDTH;
    }
    if (strKey === 'up') {
        this.y = this.y - PLAYER_MOVE_Y;
    }
    if (strKey === 'down') {
        this.y = this.y + PLAYER_MOVE_Y;
    }
    console.log("adjustedX: " + this.x);
    console.log("adjustedY: " + this.y);
     
    // Don't let the player move off the screen
    if (this.x >= CANVAS_WIDTH) {
        this.x = oldX;
    }
    if (this.x < 0) {
        this.x = oldX;
    }
    
    if (this.y < -40) {
         console.log("-PLAYER_MOVE_Y / 2 " + (-PLAYER_MOVE_Y / 2));
       this.y = oldY;
    }
    if (this.y >= CANVAS_HEIGHT - PLAYER_HEIGHT) {
        this.y = oldY;
    }
};


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
var allEnemies = [];

// create row #1 enemies
for (var i=0; i < NUM_ENEMIES; i++) {
    // put some enemies 
    var anEnemy = new Enemy(0 + i * 100, ROW1_Y, 25);
    allEnemies.push(anEnemy);
}

// create row #2 enemies

for (var i=0; i < NUM_ENEMIES; i++) {
    // put some enemies 
    var anEnemy = new Enemy(0 + i * 170, ROW2_Y, 50);
    allEnemies.push(anEnemy);
}

// create row #3 enemies
for (var i=0; i < NUM_ENEMIES; i++) {
    // put some enemies 
    var anEnemy = new Enemy(0 + i * getRandomNumber(140, 180) , ROW3_Y, 10);
    allEnemies.push(anEnemy);
}
// Place the player object in a variable called player
var player = new Player();



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

