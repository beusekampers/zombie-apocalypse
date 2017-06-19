class Gameover{

    private div: HTMLElement;
    private title: HTMLElement;
    private failGif: HTMLElement;

    constructor(){
        this.div = document.createElement("gameover");

        this.title = document.createElement("h1");
        this.title.innerHTML = "GAME OVER";
        this.div.appendChild(this.title);

        this.failGif = document.createElement("image");
        this.failGif.setAttribute("id","failGif");
        this.div.appendChild(this.failGif);

        document.body.appendChild(this.div);
    }
}