// Sélectionne le conteneur
console.log(`Hello ECMA Script !`);

// Contenneur de la modal fait maison (via first className)
let Modal = document.getElementById("modal");
// Element de background de la modal
const ModalBackground = document.getElementById("modal-bg");
// Boutton sortie de modal.
const ModalExitBtn = document.getElementById("modal-close-btn");
// Boutton de validation du cookie
const ModalValidateBtn = document.getElementById("modal-validate-btn");
// Appel du body DOM
const Body = document.body;

// Event du boutton d'acceptation des cookies
ModalValidateBtn.addEventListener("click", () => {
  // Cacher le background de la modal
  ModalBackground.style.display = "none";
  // Toggle le overflow du body
  Body.classList.toggle("no-scroll");

  //score
  function updateScore() {
    score++; // Incrémente le score
    document.getElementById("score").innerText = score; // Met à jour l'affichage du score
  }

  let score = 0; // Initialise le score à 0
  updateScore(); // Met à jour l'affichage initial du score
  setInterval(updateScore, 1000);
  let audio = new Audio("assets/img/musique-jeux.mp3");
  audio.volume = 0.01;
  audio.play();
});

let container = document.querySelector(".container");

// Crée les images pour les personnages
let Perso1 = document.createElement("img");
let Perso2 = document.createElement("img");
let mechant = document.createElement("img");

// Intègre l'image
Perso1.src = "assets/img/Personnage.PNG";
Perso2.src = "assets/img/Lucy.png";
mechant.src = "assets/img/Mob.gif";

// Règle la taille des personnages
Perso1.style.height = "100px";
Perso2.style.height = "100px";
mechant.style.height = "50px";

// Règle la position des personnages
Perso1.style.position = "absolute";
Perso2.style.position = "absolute";
mechant.style.position = "absolute";

// Règle la position des personnages
Perso1.style.right = "450px";
Perso2.style.right = "250px";
mechant.style.right = "200px";

// Règle la position des personnages
Perso1.style.bottom = "180px";
Perso2.style.bottom = "175px";
mechant.style.bottom = "175px";

// Ajoute une classe pour chaque personnage
Perso1.classList.add("david");
Perso2.classList.add("lucy");
mechant.classList.add("mechant");

// Ajoute les personnages au conteneur
container.appendChild(Perso1);
container.appendChild(Perso2);
container.appendChild(mechant);

// Sélectionne David, Lucy
let david = document.querySelector(".david");
let lucy = document.querySelector(".lucy");
let mechantElement = document.querySelector(".mechant");

// Définit une fonction pour mettre à jour le score

// Permet de bloquer l'animation et d'exécuter qu'une fois
let CantJumpDavid = false;
let CantJumpLucy = false;

// Permet d'exécuter le saut de David sur la touche ArrowUp
document.body.onkeyup = function (e) {
  if (
    (e.key == "ArrowUp" || e.code == "ArrowUp" || e.keyCode == 38) &&
    !CantJumpDavid
  ) {
    CantJumpDavid = true;
    david.style.bottom = "300px";
    david.style.transition = "1s";
    setTimeout(() => {
      let audio = new Audio("assets/img/bruit-de-pas.mp3");
      audio.volume = 1;
      audio.play();
      david.classList.add("transition");
      david.style.bottom = "180px";
      setTimeout(() => {
        CantJumpDavid = false;
      }, 1000);
    }, 999);
  }

  // Permet d'exécuter le saut de Lucy sur la touche Space
  if ((e.key == " " || e.code == "Space" || e.keyCode == 32) && !CantJumpLucy) {
    CantJumpLucy = true;
    lucy.style.bottom = "300px";
    lucy.style.transition = "1s";
    setTimeout(() => {
      let audio = new Audio("assets/img/bruit-de-pas.mp3");
      audio.volume = 1;
      audio.play();
      lucy.classList.add("transition");
      lucy.style.bottom = "180px";
      setTimeout(() => {
        CantJumpLucy = false;
      }, 1000);
    }, 999);
  }

  // Fonction pour détecter la collision
  function detecterCollision() {
    // Positions des éléments
    var rect1 = david.getBoundingClientRect();
    var rect2 = lucy.getBoundingClientRect();
    var rect4 = mechantElement.getBoundingClientRect();

    // Vérifier s'il y a chevauchement
    if (
      (rect1.right >= rect4.left &&
        rect1.left <= rect4.right &&
        rect1.bottom >= rect4.top &&
        rect1.top <= rect4.bottom) ||
      (rect2.right >= rect4.left &&
        rect2.left <= rect4.right &&
        rect2.bottom >= rect4.top &&
        rect2.top <= rect4.bottom)
    ) {
      let audio = new Audio("assets/img/roblox.mp3;");
      audio.volume = 1;
      audio.play();

      location.reload();

      // Afficher une alerte lorsque la collision est détectée
    }
  }

  // Appel de la fonction à intervalles réguliers (par exemple, toutes les 100 ms)
  setInterval(detecterCollision, 100);
};
