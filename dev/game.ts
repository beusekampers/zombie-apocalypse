class Game {
    private hero: Hero;
    private zombie: Zombie;
    private zombies:Array<Zombie>;

    private lifesWrap: HTMLElement;
    private heart: HTMLElement;
    private lifesP: HTMLElement;
    private lifes: number = 5;
    private firstHit : boolean = true;

    private utils: Util;

    private intervalId: number;
    private counter: number;

    private gameOver:boolean = false;

    constructor() {

        this.counter = 0;
        this.zombies = new Array<Zombie>();
        this.hero = new Hero;
        this.utils = new Util();

        this.lifesWrap = document.getElementById("lifeWrap");
        this.heart = document.createElement("heart");

        this.lifesWrap.appendChild(this.heart);
        this.lifesP = document.createElement("p");
        this.lifesWrap.appendChild(this.lifesP);

        this.updateLifes();

        requestAnimationFrame( () => this.gameLoop() );
        this.intervalId = setInterval(() => this.createZombie() , 1500);
    }

    private createZombie(): void{
        const randomPositionArray = [0,window.innerWidth + -100];
        const randomPosFromArray = randomPositionArray[Math.floor(randomPositionArray.length * Math.random())];

        this.zombies.push(new Zombie(randomPosFromArray));
        this.counter++;

        if(this.counter > 40){
            clearInterval(this.intervalId);
        }

    }

    private updateLifes():void {
        // equals this.lifesWrap.innerText = this.lifes.toString();
        this.lifesP.innerText = `${this.lifes}`;
    }
    
     private gameLoop(): void{
        this.hero.move();

        /* 
           forEach is een 'higher order' (-> functie die een parameter als functie meegeeft) function (net zoals map, filter etc)
           op de array API, die je kan gebruiken om te loopen
           1 parameter is je zombie,
           de andere is de iterator (denk i uit for loop)
        */
        this.zombies.forEach((z: Zombie, i: number) => {
            z.move();

            if(this.utils.calculateCollision(z, this.hero)){
                if(this.hero.isAttacking == true){
                    console.log("You are safe");
                    z.hitZombie();
                    /*
                        splice is een andere array method, om een bepaalde key uit je array te verwijderen
                        als je zombie gehit is wil je deze ook verwijderen uit je array,
                        omdat je toegang hebt tot de iterator (i), weet je welke zombie dit is
                        en welke dus ook te verwijderen
                        (stel je zou splice(i, 2) doen, zou je 2 elementen uit de array verwijderen)
                    */
                    this.zombies.splice(i,1);

                    if(this.zombies.length == 0){
                        z.hitZombie();
                        new Endscreen();
                        this.hero.removeHero();
                        this.lifesWrap.remove();
                    }
                } else{
                    if(this.firstHit) {
                        this.lifes--;
                        this.hero.isGettingHitted();
                        this.firstHit = false;
                        setTimeout(function() {
                            this.firstHit = true;
                        }.bind(this), 3000);
                    }
                    this.updateLifes();
                    if(this.lifes == 0 && this.gameOver == false){
                        this.gameOver = true;
                        new Gameover();
                        this.cleanup();
                    }
                }
            }
        });

        requestAnimationFrame( () => this.gameLoop() );
    }

    private cleanup(){
        this.hero.removeHero();
        this.lifesWrap.remove();

        this.zombies.forEach((z: Zombie, i: number) => {
            z.hitZombie();
        });
        clearInterval(this.intervalId);
    }
} 