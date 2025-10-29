
export default class Mobile {

    static IMG_WIDTH = 48;
    static IMG_HEIGHT = 48;

    constructor( x = 0,  y = 0, deltaX = 5, deltaY = 5){
        this.x = x;
        this.y = y;
        this.deltaX = deltaX;
        this.deltaY = deltaY;
        // this.image = this.#createImage(ImgSrc);    
    }

    draw(context) {
            context.drawImage(this.image, this.x, this.y);
    }

    move(canvas, game) {
        this.x = Math.max(0, Math.min(box.width - this.width, this.x + this.deltaX));
        this.y = Math.max(0, Math.min(box.height - this.height, this.y + this.deltaY));
    }

    get width() {
        return this.image.width;
    }
    get height() {
        return this.image.height;
    }

}