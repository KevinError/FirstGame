const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");

// size of the pix
const PIX = 32;

// load images

const ground = new Image();
ground.src = "assets/image/ground.png";

const foodImg = new Image();
foodImg.src = "assets/image/rem2.png";

const bombImg = new Image();
bombImg.src = "assets/image/bomb_small.jpg";

// load audio files

let dead = new Audio();
let eat = new Audio();
let up = new Audio();
let right = new Audio();
let left = new Audio();
let down = new Audio();
let bomb = new Audio();

dead.src = "assets/audio/dead.mp3";
eat.src = "assets/audio/eat.mp3";
bomb.src = "assets/audio/boom.mp3";
// Direction
up.src = "assets/audio/up.mp3";
right.src = "assets/audio/right.mp3";
left.src = "assets/audio/left.mp3";
down.src = "assets/audio/down.mp3";

// create instance of snake and fruit
snake = new Snake();

items = {
    fruit: new Item(),
    bomb : new Item()
};


var interval = (() => {
    ctx.drawImage(ground, 0, 0);
    items.fruit.draw(foodImg);
    items.bomb.draw(bombImg);
    snake.draw();
    snake.update();
    if (snake.eatItem(items.fruit.x, items.fruit.y))
    {
        snake.score++;
        eat.play();
        items.fruit.update();
    }
    else {
        snake.tail.pop();
    }

    if (snake.eatItem(items.bomb.x, items.bomb.y))
    {
        bomb.play();
        snake.tail.pop();
        items.bomb.update();
    }

    if (snake.isCollided() || snake.tail.length == 0){
        clearInterval(game);
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



