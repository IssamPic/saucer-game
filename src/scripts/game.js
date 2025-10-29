import StarShip from './StarShip.js';
import Saucer from './saucer.js';
import KeyManager from './keyManager.js';
import Shot from './shot.js';

export default class Game {

   #canvas;
   #context;
   #starShip;
   keyManager;

   constructor(canvas) {
      this.#canvas = canvas;
      this.#context = canvas.getContext('2d');
      const centerY = (canvas.height - StarShip.IMG_HEIGHT) / 2;
      this.#starShip = new StarShip(40, centerY, 0, 0);
      this.saucers = [];
      this.score = 0;
      this.keyManager = new KeyManager();
      this.shots = [];
      this.saucerInterval = null;
      this.updateScore(0);
   }

   get canvas() {
      return this.#canvas;
   }

   alea(n) {
      return Math.floor(Math.random() * n);
    }

    addSaucer(){
      const x = this.#canvas.width;
      const y = this.alea(this.#canvas.height - Saucer.IMG_HEIGHT);
      const deltaX = -5;
      const deltaY = 0;
      const newSaucer = new Saucer(x, y, deltaX, deltaY);
      this.saucers.push(newSaucer);
    }

    addShot() {
      const x = this.#starShip.x + this.#starShip.width;
      const y = this.#starShip.y + (this.#starShip.height / 2);
      const deltaX = 10;
      const newShot = new Shot(x, y, deltaX, 0);
      this.shots.push(newShot);
    }

    animate() {
      this.#context.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.#starShip.handleMoveKeys(this.keyManager);
      this.#starShip.move(this.canvas);
      this.#starShip.draw(this.#context);

      if (this.keyManager.space) {
          this.addShot();
      }

      this.saucers.forEach(saucer => {
         saucer.move(this.canvas, this);
         saucer.draw(this.#context);
      });

      this.shots.forEach(shot => {
        shot.move(this.canvas);
        shot.draw(this.#context);
        const collidedSaucer = shot.checkCollisionWithSaucers(this.saucers);
        if (collidedSaucer) {
          collidedSaucer.deltaX = 0;
          collidedSaucer.deltaY = 5;
          this.shots = this.shots.filter(s => s !== shot);
          this.updateScore(200);
        }
      });

      this.animationRequest = requestAnimationFrame(this.animate.bind(this));
    }

    updateScore(points) {
      this.score += points;
      document.getElementById('score').textContent = this.score;
    }

    removeSaucer(saucer) {
      this.saucers = this.saucers.filter(s => s !== saucer);
    }

    toggleSaucerInterval() {
      if (this.saucerInterval) {
        clearInterval(this.saucerInterval);
        this.saucerInterval = null;
      } else {
        this.saucerInterval = setInterval(() => {
          if (Math.random() < 0.5) {
            this.addSaucer();
          }
        }, 750);
      }
    }

    keyUpActionHandler(event) {
      switch (event.key) {
        case "ArrowUp":
        case "Up":
          this.keyManager.upReleased();
          break;
        case "ArrowDown":
        case "Down":
          this.keyManager.downReleased();
          break;
        case " ":
          this.keyManager.spaceReleased();
          break;
        default:
          return;
      }
      event.preventDefault();
    }

    keyDownActionHandler(event) {
        switch (event.key) {
          case "ArrowUp":
          case "Up":
            this.keyManager.upPressed();
            break;
          case "ArrowDown":
          case "Down":
            this.keyManager.downPressed();
            break;
          case " ":
            this.keyManager.spacePressed();
          default:
            return;
        }
        event.preventDefault();
      }
}