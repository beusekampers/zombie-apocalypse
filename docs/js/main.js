var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Game = (function () {
    function Game() {
        var _this = this;
        this.lifes = 5;
        this.firstHit = true;
        this.zeroLifes = false;
        this.counter = 0;
        this.zombies = new Array();
        this.hero = new Hero;
        this.utils = new Util();
        this.lifesWrap = document.getElementById("lifeWrap");
        this.heart = document.createElement("heart");
        this.lifesWrap.appendChild(this.heart);
        this.lifesP = document.createElement("p");
        this.lifesWrap.appendChild(this.lifesP);
        this.updateLifes();
        requestAnimationFrame(function () { return _this.gameLoop(); });
        this.intervalId = setInterval(function () { return _this.createZombie(); }, 1500);
    }
    Game.prototype.createZombie = function () {
        var randomPositionArray = [0, window.innerWidth + -100];
        var randomPosFromArray = randomPositionArray[Math.floor(randomPositionArray.length * Math.random())];
        this.zombies.push(new Zombie(randomPosFromArray));
        this.counter++;
        if (this.counter > 40) {
            clearInterval(this.intervalId);
        }
    };
    Game.prototype.updateLifes = function () {
        this.lifesP.innerText = "" + this.lifes;
    };
    Game.prototype.gameLoop = function () {
        var _this = this;
        this.hero.move();
        this.zombies.forEach(function (z, i) {
            z.move();
            if (_this.utils.calculateCollision(z, _this.hero)) {
                if (_this.hero.isAttacking == true) {
                    console.log("You are safe");
                    z.hitZombie();
                    _this.zombies.splice(i, 1);
                    if (_this.zombies.length == 0) {
                        z.hitZombie();
                        _this.winScreen = new Winscreen();
                        _this.cleanup();
                    }
                }
                else {
                    if (_this.firstHit) {
                        _this.lifes--;
                        _this.hero.isGettingHitted();
                        _this.firstHit = false;
                        setTimeout(function () {
                            this.firstHit = true;
                        }.bind(_this), 3000);
                    }
                    _this.updateLifes();
                    if (_this.lifes == 0 && _this.zeroLifes == false) {
                        _this.zeroLifes = true;
                        _this.gameOver = new Gameover();
                        _this.cleanup();
                    }
                }
            }
        });
        requestAnimationFrame(function () { return _this.gameLoop(); });
    };
    Game.prototype.cleanup = function () {
        this.hero.removeHero();
        this.lifesWrap.remove();
        this.zombies.forEach(function (z, i) {
            z.hitZombie();
        });
        clearInterval(this.intervalId);
    };
    return Game;
}());
var Character = (function () {
    function Character(htmlTag, posX, posY, speedX) {
        this.width = 80;
        this.height = 150;
        this.div = document.createElement(htmlTag);
        this.posX = posX;
        this.posY = posY;
        this.speedX = speedX;
        document.body.appendChild(this.div);
    }
    Character.prototype.move = function () {
        this.posX += this.speedX;
        this.draw();
    };
    Character.prototype.draw = function () {
        this.div.style.transform = "translate(" + this.posX + "px, " + this.posY + "px)";
    };
    return Character;
}());
var Endscreen = (function () {
    function Endscreen(htmlTag, t, g) {
        this.div = document.createElement(htmlTag);
        this.title = document.createElement("h1");
        this.title.innerHTML = t;
        this.div.appendChild(this.title);
        this.gif = document.createElement("image");
        this.gif.setAttribute("id", g);
        this.div.appendChild(this.gif);
        document.body.appendChild(this.div);
    }
    return Endscreen;
}());
var Gameover = (function (_super) {
    __extends(Gameover, _super);
    function Gameover() {
        return _super.call(this, "endscreen", "GAME OVER", "failGif") || this;
    }
    return Gameover;
}(Endscreen));
var Hero = (function (_super) {
    __extends(Hero, _super);
    function Hero() {
        var _this = _super.call(this, "hero", (window.innerWidth / 2 - 50), 510, 0) || this;
        _this.imageString = "";
        _this.isAttacking = false;
        window.addEventListener("keydown", function (event) { return _this.onKeyDown(event); });
        window.addEventListener("keyup", function (event) { return _this.onKeyUp(event); });
        return _this;
    }
    Hero.prototype.onKeyDown = function (event) {
        switch (event.keyCode) {
            case 39:
                this.posX = Math.min(1360, this.posX);
                this.imageString = "-flipped";
                this.speedX = 3;
                this.div.style.backgroundImage = "url('../docs/images/hero-walk" + this.imageString + ".GIF')";
                this.div.style.backgroundSize = "contain";
                break;
            case 37:
                this.posX = Math.max(0, this.posX - 0);
                this.imageString = "";
                this.speedX = -3;
                this.div.style.backgroundImage = "url('../docs/images/hero-walk" + this.imageString + ".GIF')";
                break;
            case 32:
                if (!this.isAttacking) {
                    this.isAttacking = true;
                    this.div.style.backgroundImage = "url('../docs/images/hero-attack" + this.imageString + ".png')";
                    setTimeout(function () {
                        this.div.style.backgroundImage = "url('../docs/images/hero-walk" + this.imageString + ".GIF')";
                    }.bind(this), 400);
                }
        }
    };
    Hero.prototype.onKeyUp = function (event) {
        this.speedX = 0;
        this.posY = 510;
        switch (event.keyCode) {
            case 32:
                this.isAttacking = false;
        }
    };
    Hero.prototype.isGettingHitted = function () {
        this.div.classList.add("damaged");
        setTimeout(function () {
            this.div.classList.remove("damaged");
        }.bind(this), 3000);
    };
    Hero.prototype.removeHero = function () {
        this.div.remove();
    };
    return Hero;
}(Character));
window.addEventListener("load", function () {
    new Startscreen();
});
var Startscreen = (function () {
    function Startscreen() {
        this.startScreen();
    }
    Startscreen.prototype.startScreen = function () {
        var _this = this;
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
        this.startbutton.addEventListener("click", function (event) { return _this.startGame(event); });
    };
    Startscreen.prototype.startGame = function (event) {
        this.div.remove();
        this.div = undefined;
        this.game = new Game();
    };
    return Startscreen;
}());
var Util = (function () {
    function Util() {
    }
    Util.prototype.calculateCollision = function (z, h) {
        return (h.posX < z.posX + z.width &&
            h.posX + h.width > z.posX &&
            h.posY < z.posY + z.height &&
            h.height + h.posY > z.posY);
    };
    return Util;
}());
var Winscreen = (function (_super) {
    __extends(Winscreen, _super);
    function Winscreen() {
        return _super.call(this, "endscreen", "You won the game", "succesGif") || this;
    }
    return Winscreen;
}(Endscreen));
var Zombie = (function (_super) {
    __extends(Zombie, _super);
    function Zombie(randomPosX) {
        var _this = _super.call(this, "zombie", randomPosX, 535, 1) || this;
        _this.posX = randomPosX;
        _this.div.style.top = _this.posY + "px";
        _this.div.style.backgroundImage = "url('../docs/images/zombie-flipped.gif')";
        _this.move();
        return _this;
    }
    Zombie.prototype.move = function () {
        this.posX += this.speedX;
        if (this.posX > window.innerWidth - 85) {
            console.log('move to right');
            this.speedX = this.speedX * -1;
            this.imageString = "";
            this.div.style.backgroundImage = "url('../docs/images/zombie" + this.imageString + ".gif')";
        }
        else if (this.posX < 0 - 45) {
            console.log('move to left');
            this.speedX = this.speedX * -1;
            this.div.style.transform = "scaleX(-1)";
        }
        this.div.style.transform = "translate(" + this.posX + "px, 0px)";
    };
    Zombie.prototype.hitZombie = function () {
        this.div.remove();
    };
    return Zombie;
}(Character));
//# sourceMappingURL=main.js.map