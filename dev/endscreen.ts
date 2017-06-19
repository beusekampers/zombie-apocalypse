class Endscreen{

    private div: HTMLElement;
    private title: HTMLElement;
    private gif: HTMLElement;

    constructor(htmlTag: string, t: string, g: string){
        this.div = document.createElement(htmlTag);
        
        this.title = document.createElement("h1");
        this.title.innerHTML = t;
        this.div.appendChild(this.title);

        this.gif = document.createElement("image");
        this.gif.setAttribute("id", g);
        this.div.appendChild(this.gif);

        document.body.appendChild(this.div);
    }
}