
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
            // si l'image est chargée, on la dessine, sinon on dessine un placeholder
            if (this.image && this.image.complete && this.image.width > 0) {
                context.drawImage(this.image, this.x, this.y);
            } else {
                // placeholder simple (rectangle)
                context.fillStyle = 'magenta';
                context.fillRect(this.x, this.y, Mobile.IMG_WIDTH, Mobile.IMG_HEIGHT);
            }
    }

    move(canvas, game) {
        // utilise le canvas passé en paramètre (box était une variable inexistante)
        const maxX = canvas.width - this.width;
        const maxY = canvas.height - this.height;
        this.x = Math.max(0, Math.min(maxX, this.x + this.deltaX));
        this.y = Math.max(0, Math.min(maxY, this.y + this.deltaY));
    }

    get width() {
        return (this.image && this.image.width) || Mobile.IMG_WIDTH;
    }
    get height() {
        return (this.image && this.image.height) || Mobile.IMG_HEIGHT;
    }

}