/// <reference path="game.ts"/>

class Character{

    protected div:HTMLElement;
    public hitbox: HTMLElement;

    public posX:number;
    public posY:number;
    public speedX:number;

    constructor(htmlTag: string, posX: number, posY: number, speedX: number){
        
        this.div = document.createElement(htmlTag);
        this.posX = posX;
        this.posY = posY;
        this.speedX = speedX;

        this.div.style.bottom = this.posY + "px";

        document.body.appendChild(this.div);

    }

    public move(): void{
        this.posX += this.speedX;

        this.draw();
    }

    private draw(): void {
        this.div.style.transform = "translate("+this.posX+"px, 0px)";
    }
}