import Mobile from './mobile.js';
import ImgSrc from './assets/images/tir.png';

export default class Shot extends Mobile {

    constructor(x, y) {
        super(x, y, 8, 0);
        this.image = this.#createImage(ImgSrc);
    }

    move(canvas) {
        this.x += this.deltaX;
        if (this.x < -this.width) {
            this.x = canvas.width;
        }
    }

    draw(context) {
        super.draw(context);
    }

    #createImage(imageSource) {
        const newImg = new Image();
        newImg.src = imageSource;
        return newImg;
    }

    get width() {
        return this.image.width;
    }

    get height() {
        return this.image.height;
    }

    isCollidingWith(mobile) {
        return (
            this.x < mobile.x + mobile.width &&
            this.x + this.width > mobile.x &&
            this.y < mobile.y + mobile.height &&
            this.y + this.height > mobile.y
        );
    }

    checkCollisionWithSaucers(saucers) {
        for (const saucer of saucers) {
            if (this.isCollidingWith(saucer)) {
                return saucer;
            }
        }
        return null;
    }

    
}