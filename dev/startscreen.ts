

class Startscreen{
    private div: HTMLElement;
    private title: HTMLElement;
    private subtitle: HTMLElement;
    private startbutton: HTMLElement;

    constructor(){
        this.startScreen();
    }

    startScreen(): void{
        this.div = document.createElement("startscreen");
        
        this.title = document.createElement("h1");
        this.title.innerHTML = "ZOMBIE APOCALYPSE";
        this.div.appendChild(this.title);

        this.subtitle = document.createElement("p");
        this.subtitle.innerHTML = "Press the play button";
        this.div.appendChild(this.subtitle);

        this.startbutton = document.createElement("startgame");
        this.div.appendChild(this.startbutton);

        document.body.appendChild(this.div);

        this.startbutton.addEventListener("click", (event : MouseEvent) => this.startGame(event));
    }

    private startGame(event : MouseEvent): void{
        this.div.remove();
        this.div = undefined;
        new Game();
    }
}