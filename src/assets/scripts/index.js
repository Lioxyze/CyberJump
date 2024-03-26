////////////////////////
////////Modal Regle//////
////////////////////////

let modal = document.getElementById("myModal");
let btn = document.getElementById("myBtn");
let span = document.getElementsByClassName("close")[0];
btn.onclick = function () {
  modal.style.display = "block";
};
span.onclick = function () {
  modal.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

////////////////////////
////////Modal Menu//////
////////////////////////

// Contenneur de la modal
let Modal = document.getElementById("modal");
// Element de background de la modal
let ModalBackground = document.getElementById("modal-bg");
// Boutton sortie de modal.
let ModalExitBtn = document.getElementById("modal-close-btn");
// Boutton de validation du cookie
let ModalValidateBtn = document.getElementById("modal-validate-btn");

// Event du boutton start
ModalValidateBtn.addEventListener("click", () => {
  // Cacher le background de la modal
  ModalBackground.style.display = "none";
  container.style.display = "block";

  let modal = document.getElementById("myModal");
  let btn = document.getElementById("myBtn");
  let span = document.getElementsByClassName("close")[0];
  btn.onclick = function () {
    modal.style.display = "block";
  };
  span.onclick = function () {
    modal.style.display = "none";
  };
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };

  ////////////////////////
  ////////Score///////////
  ////////////////////////

  //Score en temps reel le score augmente de 1 tout les seconde//

  function updateScore() {
    score++; // Incrémente le score
    document.getElementById("score").innerText = score; // Met à jour l'affichage du score
  }
  let score = 0; // Initialise le score à 0
  updateScore(); // Met à jour l'affichage initial du score
  setInterval(updateScore, 1000);
  let audio1 = new Audio("assets/img/music-8bit.mp3");
  audio1.volume = masterVolume;
  audio1.play();
});

////////////////////////
////////Fullscreen//////
////////////////////////

// function qui permet de metre en fullscreen au clique sur (Joueur 2)
let elem = document.querySelector(".container");

function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) {
    elem.msRequestFullscreen();
    domReady(fonction);
  }
}

//////////////////////////////////////
////////Creation des personnage //////
//////////////////////////////////////

// Contenneur de la modal
let container = document.querySelector(".container");

// Crée les images pour les personnages
let Perso1 = document.createElement("img");
let Perso2 = document.createElement("img");
let mechant = document.createElement("img");
let logoCorp = document.createElement("img");

// Intègre l'image
Perso1.src = "assets/img/Personnage.PNG";
Perso2.src = "assets/img/Lucy.png";
mechant.src = "assets/img/jacob-hogan-hoverenemy-idle1.gif";
logoCorp.src = "assets/img/LioCorp-20-03-2024.gif";

// Règle la taille des personnages
Perso1.style.height = "100px";
Perso2.style.height = "100px";
mechant.style.height = "50PX";
logoCorp.style.height = "50px";

// Règle la position des personnages
Perso1.style.position = "absolute";
Perso2.style.position = "fixed";
mechant.style.position = "fixed";
logoCorp.style.position = "fixed";

// Règle la position des personnages
Perso1.style.right = "800px";
Perso2.style.right = "400px";
mechant.style.right = "2000px";
logoCorp.style.right = "25px";

// Règle la position des personnages
Perso1.style.bottom = "230px";
Perso2.style.bottom = "230px";
mechant.style.bottom = "230px";
logoCorp.style.bottom = "700px";

// Ajoute une classe pour chaque personnage
Perso1.classList.add("david");
Perso2.classList.add("lucy");
mechant.classList.add("mechant");
logoCorp.classList.add("logoCorp");

// Ajoute les personnages au conteneur
container.appendChild(Perso1);
container.appendChild(Perso2);
container.appendChild(mechant);
container.appendChild(logoCorp);

// Sélectionne David, Lucy, Mechant
let david = document.querySelector(".david");
let lucy = document.querySelector(".lucy");
let mechantElement = document.querySelector(".mechant");

//////////////////
////////Son //////
//////////////////

//Config General Du Son
const audio1 = new Audio("assets/img/music-8bit.mp3");
const audio2 = new Audio("assets/img/saut.wav");
const audio3 = new Audio("assets/img/bruit-de-pas.mp3");
const audio4 = new Audio("assets/img/saut.wav");
const audio5 = new Audio("assets/img/bruit-de-pas.mp3");
const audio6 = new Audio("assets/img/roblox.mp3");
const masterVolume = 0.03;
audio1.volume = masterVolume;
audio2.volume = masterVolume;
audio3.volume = masterVolume;
audio4.volume = masterVolume;
audio5.volume = masterVolume;
audio6.volume = masterVolume;

//////////////////////////////////////
////////Mecanique du saut ///////////
//////////////////////////////////////

// Permet de bloquer l'animation et d'exécuter qu'une fois
let CantJumpDavid = false;
let CantJumpLucy = false;

//Personnage David //
// Permet d'exécuter le saut de David sur la touche ArrowUp
document.body.onkeyup = function (e) {
  if (e.code == "Space" && !CantJumpDavid) {
    CantJumpDavid = true;
    audio2.volume = masterVolume;
    audio2.play();
    david.style.bottom = "400px";
    david.style.transition = "0.9s";
    setTimeout(() => {
      audio3.volume = masterVolume;
      audio3.play();
      david.classList.add("transition");
      david.style.bottom = "230px";
      setTimeout(() => {
        CantJumpDavid = false;
      }, 1000);
    }, 999);
  }

  //Personnage Lucy //
  // Permet d'exécuter le saut de Lucy sur la touche Space
  if (e.code == "ArrowUp" && !CantJumpLucy) {
    CantJumpLucy = true;
    let audio4 = new Audio("assets/img/saut.wav");
    audio4.volume = masterVolume;
    audio4.play();
    lucy.style.bottom = "400px";
    lucy.style.transition = "0.9s";
    setTimeout(() => {
      audio5.volume = masterVolume;
      audio5.play();
      lucy.classList.add("transition");
      lucy.style.bottom = "230px";
      setTimeout(() => {
        CantJumpLucy = false;
      }, 1000);
    }, 999);
  }

  //////////////////////////////////////
  ////////Colision Personnage ///////////
  //////////////////////////////////////

  // Fonction pour détecter la collision
  function detecterCollision() {
    // Positions des éléments
    let rect1 = david.getBoundingClientRect();
    let rect2 = lucy.getBoundingClientRect();
    let rect4 = mechantElement.getBoundingClientRect();

    // Vérifier s'il y a collision
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
      //Permet de reload la pqge une fois la mort
      setInterval(location.reload(), 1);
    }
  }

  // Appel de la fonction à intervalles réguliers (par exemple, toutes les 100 ms)
  setInterval(detecterCollision, 100);
};

////////////////////////////////////////////////
////////Fermer Le jeux avec le bouton Exit ///////////
//////////////////////////////////////////////

function fermerFenetreCourante() {
  window.close();
}

/* //////////////////////////////////////
  ////////Created By Lioxyze ///////////
  ////////////////////////////////////// */
