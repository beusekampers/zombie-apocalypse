class Gameover extends Endscreen{

    private reloadBtn :HTMLElement;

    constructor(){
        super("endscreen", "GAME OVER", "failGif");

        this.reloadBtn = document.createElement("a");
        this.reloadBtn.setAttribute("id", "reloadBtn");
        this.reloadBtn.innerHTML = "Try again";
        this.reloadBtn.addEventListener( "click", () => this.reload());

        this.div.appendChild(this.reloadBtn);
    }

    private reload(){
        location.reload();
    }
}