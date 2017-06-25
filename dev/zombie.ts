/// <reference path="character.ts"/>

class Zombie extends Character{
    
    private imageString : string;
    
    public width:number = 70;
    public height:number = 150;

    constructor(randomPosX){
        super("zombie", randomPosX, 140 , 1 );  
        this.posX = randomPosX;

        this.move();
    }

    public move(): void{
        this.posX += this.speedX;

        if(this.posX > window.innerWidth - 65 ){
            console.log('move to right')
            this.speedX = this.speedX * -1;

            this.imageString = "";
            this.div.style.backgroundImage = "url('../docs/images/zombie"+this.imageString+".gif')";
        } else if(this.posX < 0 - 45){
            console.log('move to left')
            this.speedX = this.speedX * -1;

            this.imageString = "-flipped";
            this.div.style.backgroundImage = "url('../docs/images/zombie"+this.imageString+".gif')";
            this.div.style.transform = "scaleX(-1)";

        }
        this.div.style.transform = "translate("+this.posX+"px, 0px)";
    }

    public hitZombie(): void{
        this.div.remove();
    }
}