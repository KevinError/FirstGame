class Fruit {
    constructor() {
        this.x = 0;
        this.y = 0;

    }

    update() {
        this.x = this.generateRandomFood(17, 1);
        this.y = this.generateRandomFood(15, 3);
    }

    // create random coordinates for fruit
    generateRandomFood(rowCol, xY) {
        return Math.floor(Math.random() * rowCol + xY) * PIX;
    }

    // draw the fruit in the ground with the random coordinates
    draw(){
        ctx.drawImage(foodImg, this.x, this.y);
    }
}