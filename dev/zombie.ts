/// <reference path="character.ts"/>

class Zombie extends Character{
    
    private imageString : string;

    constructor(randomPosX){
        super("zombie", randomPosX, 535 , 1 );  
        this.posX = randomPosX;
    
        this.div.style.top = this.posY + "px";
        this.div.style.backgroundImage = "url('../dist/images/zombie-flipped.GIF')";

        this.move();
    }

    public move(): void{
        this.posX += this.speedX;

        if(this.posX > window.innerWidth - 85 ){
            console.log('move to right')
            this.speedX = this.speedX * -1;

            this.imageString = "";
            this.div.style.backgroundImage = "url('../dist/images/zombie"+this.imageString+".GIF')";

        } else if(this.posX < 0 - 45){
            console.log('move to left')
            this.speedX = this.speedX * -1;

            // this.imageString = "-flipped";
            // this.div.style.backgroundImage = "url('../dist/images/zombie"+this.imageString+".GIF')";
            this.div.style.transform = "scaleX(-1)";

        }
        this.div.style.transform = "translate("+this.posX+"px, 0px)";
    }

    public hitZombie(): void{
        this.div.remove();
    }
}