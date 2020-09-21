class Snake {
    constructor(){
        // head ? 
        this.x = 9 * PIX;
        this.y = 10 * PIX;
        this.d = '';
        this.score = 0;
        this.tail = [{x : this.x, y : this.y}];

    }

    changeDirection(keyCode) {
        if(keyCode == 37 && this.d != "RIGHT"){
            left.play();
            this.d = "LEFT";
        } 
        else if(keyCode == 38 && this.d != "DOWN"){
            this.d = "UP";
            up.play();
        } 
        else if(keyCode == 39 && this.d != "LEFT"){
            this.d = "RIGHT";
            right.play();
        } 
        else if(keyCode == 40 && this.d != "UP"){
            this.d = "DOWN";
            down.play();
        }
    }

    /*
    / updates the coordinates of head of the snake and push it into the array as the first element.
    */ 
    update(){
        switch(this.d) {
            case 'LEFT':
                this.x -= PIX;
            break;
            case 'RIGHT':
                this.x += PIX;
            break;
            case 'UP':
                this.y -= PIX;
            break;
            case 'DOWN':
                this.y += PIX;
            break;
        }

        this.tail.unshift({x : this.x, y : this.y});


    }

    //collsion
    isCollided() {
        for (let i = 1; i < this.tail.length; i++)
        {
            if (this.x == this.tail[i].x && this.y == this.tail[i].y)
            {
                console.log("Hello"+ this.tail.length);
                return true;
            }
        }

        if(this.x < PIX || this.x > 17 * PIX || this.y < 3 * PIX || this.y > 17 * PIX) {return true;}

        return false;
    }

    /*
    / if the coordinate of head of the snake is same as the coordinate of the item, then return true. 
    / Otherwise, return false.
    */
    eatItem(itemX, itemY) {
        if(this.x == itemX && this.y == itemY){
            return true;
        }
        return false;
    }

    /*
    / display the score on the board
    */
    displayScore(){
        ctx.fillStyle = "white";
        ctx.font = "45px Changa one";
        ctx.fillText(this.score,2 * PIX,1.6 * PIX);
    }


    /*
    / draws the snake on the board
    / for loop goes through the list and draws the white box based on each element's x and y value.
    */
   draw() {
    for (let i = 0; i < this.tail.length; i++){
        ctx.fillStyle = ( i == 0 )? "green" : "blue";
        ctx.fillRect(this.tail[i].x, this.tail[i].y, PIX, PIX);
        
        ctx.strokeStyle = "red";
        ctx.strokeRect(this.tail[i].x, this.tail[i].y, PIX, PIX);
    }
}
}