class Util{

    constructor(){
    }

    public calculateCollision(z: Zombie, h: Hero):boolean{
            return (h.posX < z.posX + z.width &&
                h.posX + h.width > z.posX &&
                h.posY < z.posY + z.height &&
                h.height + h.posY > z.posY) 
    }
}