/// <reference path="character.ts"/>


class Hero extends Character{ 

    private imageString :string = "";
    public isAttacking: boolean = false;

    public width:number = 70;
    public height:number = 150;


    constructor(){
        super("hero", (window.innerWidth / 2 - 50), 150, 0);

        window.addEventListener("keydown", (event : KeyboardEvent) => this.onKeyDown(event));
        window.addEventListener("keyup", (event : KeyboardEvent) => this.onKeyUp(event));
    }

    private onKeyDown(event : KeyboardEvent) :void{
        switch(event.keyCode){
        case 39:
            // Go right
            this.posX = Math.min(1360, this.posX);
            // console.log(this.posX);
            this.imageString = "-flipped";
            this.speedX = 3;
            this.div.style.backgroundImage = "url('../docs/images/hero-walk"+this.imageString+".gif')";
            this.div.style.backgroundSize = "contain";
            break;
        case 37:
            // Go left
            this.posX = Math.max(0, this.posX-0);
            this.imageString = "";
            this.speedX = -3;
            this.div.style.backgroundImage = "url('../docs/images/hero-walk"+this.imageString+".gif')";
            break;
        case 32:
            // Attack

            if (!this.isAttacking){
                this.isAttacking = true;
                this.div.style.backgroundImage = "url('../docs/images/hero-attack"+this.imageString+".png')";

                setTimeout(function() {
                    this.div.style.backgroundImage = "url('../docs/images/hero-walk"+this.imageString+".gif')";
                }.bind(this), 400);
                if(this.div.classList.contains("damaged")){
                    this.isAttacking = false;
                }
            }
        }
        
    }

    private onKeyUp(event : KeyboardEvent) :void {
        this.speedX = 0;

        switch(event.keyCode){
        case 32:
            this.isAttacking = false;
        }
    }

    public isGettingHitted(): void{
        this.div.classList.add("damaged");
        setTimeout(function(){
            this.div.classList.remove("damaged");
        }.bind(this),2000);
    }

    public removeHero(): void{
        this.div.remove();
    }
}