
var imageRepository = new function() {
	this.background = new Image();

	this.background.srx = "imgs/bg.png";
};


function Drawable() {
	this.init = function(x, y) {
		this.x = x;
		this.y = y;
	};

	this.speed = 0;
	this.canvasWidth = 0;
	this.canvasHeight = 0;

	this.draw = function() {

	};
}

function Background() {
	this.speed = 1; //redefine speed of the background for panning

	this.draw = function() {
		this.y += this.speed;
		this.context.drawImage(imageRepository.background, this.y, this.canvasHeight);

		if(this.y >= this.canvasHeight) {
			this.y = 0;
		}
	};
}

background.prototype = new Drawable();