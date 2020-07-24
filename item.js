class Item {
    constructor() {
        this.x = 0;
        this.y = 0;

    }

    update() {
        this.x = this.generateRandomItem(17, 1);
        this.y = this.generateRandomItem(15, 3);
    }

    // create random coordinates for item
    generateRandomItem(rowCol, xY) {
        return Math.floor(Math.random() * rowCol + xY) * PIX;
    }

    // draw the item in the ground with the random coordinates
    draw(img){
        ctx.drawImage(img, this.x, this.y);
    }
}