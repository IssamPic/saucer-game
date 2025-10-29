
// importation de la classe Game.js
import Game from './game.js';


// mise en place de l'action des clics sur les boutons + les gestionnaires du clavier pour contrôler Greedy
const init = () => {
   const canvas = document.getElementById("stars");
   const game = new Game(canvas);

   game.animate();

   setInterval(() => {
      game.addSaucer();
   }, 700);

   window.addEventListener("keydown", (event) => game.keyDownActionHandler(event));
   window.addEventListener("keyup", (event) => game.keyUpActionHandler(event));

   const flotteSoucoupesButton = document.getElementById("flotteSoucoupes");
   flotteSoucoupesButton.addEventListener("click", () => game.toggleSaucerInterval());
   document.getElementById('nouvelleSoucoupe').addEventListener('click', ()=> game.addSaucer());
   
}

window.addEventListener("load", init);

//
console.log('le bundle a été généré');
