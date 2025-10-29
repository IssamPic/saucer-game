import Mobile from './mobile.js';
import ImgSrc from './assets/images/vaisseau-ballon-petit.png';

export default class StarShip extends Mobile {

    constructor(x = 0, y = 0,deltaX = 0, deltaY = 0) {
        super(x, y, deltaX, deltaY);
        this.image = this.#createImage(ImgSrc);
        this.moving = "immobile";
    }

    // Override the move method if needed
    move(canvas) {
        this.y += this.deltaY;
        if (this.y < 0) this.y = 0;
        if (this.y > canvas.height - this.height) this.y = canvas.height - this.height;
    }


    get up(){
        return this.moving === "up";
    }

    get down(){
        return this.moving === "down";
    }

    moveUp(){
        this.moving = "up";
        this.deltaY = -8;
    }

    moveDown(){
        this.moving = "down";
        this.deltaY = 8;
    }

    stopMoving(){
        this.moving = "stop";
        this.deltaX = 0;
        this.deltaY = 0;
    }

    handleMoveKeys(keyManager) {
        this.stopMoving();
        if (keyManager.up) {
            this.moveUp();
        }
        if (keyManager.down) {
            this.moveDown();
        }
    }

    /* crée l'objet Image à utiliser pour dessiner cette balle */
    #createImage(imageSource) {
        const newImg = new Image();
        newImg.src = imageSource;
        return newImg;
    }
}