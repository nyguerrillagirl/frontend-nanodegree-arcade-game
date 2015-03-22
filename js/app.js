//  File: app.js
//
//  Uses utility.js for utility functions and game constants 


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
    if (Frogger.paused) return;
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    console.log("Enemy.prototype.update - dt: " + dt);
    this.x = this.x + this.speed * dt;
    if (this.x > Frogger.CANVAS_WIDTH) {
        this.x = -100;
    }
    //console.log("enemy location - x: " + this.x + "  y: " + this.y);
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
    this.x = Frogger.CANVAS_WIDTH / 2 - Frogger.PLAYER_WIDTH / 2;
    this.y = 5 * 83 - 40;
};
Player.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

// Draw the enemy on the screen, required method for game
Player.prototype.render = function() {
    console.log("Drawing the player....");
    console.log("player.x: " + this.x + " player.y: " + this.y);
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(strKey) {
    var oldX = this.x;
    var oldY = this.y;
    if (strKey === 'left') {
        this.x = this.x - Frogger.PLAYER_WIDTH;
    }
    if (strKey === 'right') {
        this.x = this.x + Frogger.PLAYER_WIDTH;
    }
    if (strKey === 'up') {
        this.y = this.y - Frogger.PLAYER_MOVE_Y;
    }
    if (strKey === 'down') {
        this.y = this.y + Frogger.PLAYER_MOVE_Y;
    }
     
    // Don't let the player move off the screen
    if (this.x >= Frogger.CANVAS_WIDTH) {
        this.x = oldX;
    }
    if (this.x < 0) {
        this.x = oldX;
    }
    
    if (this.y < -40) {
       this.y = oldY;
    }
    if (this.y >= Frogger.CANVAS_HEIGHT - Frogger.PLAYER_HEIGHT) {
        this.y = oldY;
    }
};


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
var allEnemies = [];

// create row #1 enemies
for (var i=0; i < Frogger.NUM_ENEMIES; i++) {
    // put some enemies 
    var anEnemy = new Enemy(0 + i * 100, Frogger.ROW1_Y, 25);
    allEnemies.push(anEnemy);
}

// create row #2 enemies

for (var i=0; i < Frogger.NUM_ENEMIES; i++) {
    // put some enemies 
    var anEnemy = new Enemy(0 + i * 170, Frogger.ROW2_Y, 50);
    allEnemies.push(anEnemy);
}

// create row #3 enemies
for (var i=0; i < Frogger.NUM_ENEMIES; i++) {
    // put some enemies 
    var anEnemy = new Enemy(0 + i * getRandomNumber(150, 180) , Frogger.ROW3_Y, 10);
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

