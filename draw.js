const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");

// size of the pix
const PIX = 32;

// load images

const ground = new Image();
ground.src = "image/ground.png";

const foodImg = new Image();
foodImg.src = "image/rem1.png";

// load audio files

let dead = new Audio();
let eat = new Audio();
let up = new Audio();
let right = new Audio();
let left = new Audio();
let down = new Audio();

dead.src = "audio/dead.mp3";
eat.src = "audio/eat.mp3";
up.src = "audio/up.mp3";
right.src = "audio/right.mp3";
left.src = "audio/left.mp3";
down.src = "audio/down.mp3";

// create instance of snake and fruit
snake = new Snake();
fruit = new Fruit();
fruit.update();

var interval = (() => {
    ctx.drawImage(ground, 0, 0);
    fruit.draw();
    snake.draw();
    snake.update();
    if (snake.eat(fruit.x, fruit.y))
    {
        snake.score++;
        eat.play();
        fruit.update();
    }
    else {
        snake.tail.pop();
    }

    if (snake.isCollided()){
        clearInterval(game); // TODO: try other way
        dead.play();
        alert("Game Over!");
    }

    snake.displayScore();

})

// set eventlistener for keydown
window.addEventListener("keydown", ((evt) => {
    snake.changeDirection(evt.keyCode);
}))
let game = setInterval(interval, 100); // repeats every 0.1sec



