import Mobile from './mobile.js';
const ImgSrc = 'images/flyingSaucer-petit.png';

export default class Saucer extends Mobile {

    constructor(x, y = Math.random() * 400, deltaX = -5, deltaY = 0) {
        super(x ?? 0, y, deltaX, deltaY);
        this.image = this.#createImage(ImgSrc);
    }

    move(canvas, game) {
        this.x += this.deltaX;
        this.y += this.deltaY;
        if (this.x + this.width < 0 || this.y + this.height > canvas.height || this.y == 100 || this.x < 0 && game.score > 100) {
            game.updateScore(-100);
            game.removeSaucer(this);
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
}