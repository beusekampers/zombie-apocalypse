class Endscreen{

    private div: HTMLElement;
    private title: HTMLElement;
    private succesGif: HTMLElement;

    constructor(){
        this.div = document.createElement("endscreen");
        this.title = document.createElement("h1");

        this.title.innerHTML = "You won the game";
        this.div.appendChild(this.title);

        this.succesGif = document.createElement("image");
        this.succesGif.setAttribute("id","succesGif");
        this.div.appendChild(this.succesGif);


        document.body.appendChild(this.div);
    }
}