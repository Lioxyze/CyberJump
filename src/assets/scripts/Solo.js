let containerSolo = document.querySelector(".containerSolo");

// Crée les images pour les personnages
let Perso1 = document.createElement("img");
let Perso2 = document.createElement("img");
let mechant = document.createElement("img");
let logo = document.createElement("img");

// Intègre l'image
Perso1.src = "assets/img/Personnage.PNG";
Perso2.src = "assets/img/Lucy.png";
mechant.src = "assets/img/jacob-hogan-hoverenemy-idle1.gif";
logo.src = "assets/img/LioCorp-20-03-2024.gif";

// Règle la taille des personnages
Perso1.style.height = "100px";
Perso2.style.height = "100px";
mechant.style.height = "50PX";
logo.style.height = "50px";

// Règle la position des personnages
Perso1.style.position = "absolute";
Perso2.style.position = "absolute";
mechant.style.position = "absolute";
logo.style.position = "absolute";

// Règle la position des personnages
Perso1.style.right = "450px";
Perso2.style.right = "250px";
mechant.style.right = "2000px";
logo.style.right = "25px";

// Règle la position des personnages
Perso1.style.bottom = "180px";
Perso2.style.bottom = "175px";
mechant.style.bottom = "175px";
logo.style.bottom = "530px";

// Ajoute une classe pour chaque personnage
Perso1.classList.add("david");
Perso2.classList.add("lucy");
mechant.classList.add("mechant");
logo.classList.add("logo");

// Ajoute les personnages au conteneur
containerSolo.appendChild(Perso1);
containerSolo.appendChild(Perso2);
containerSolo.appendChild(mechant);
containerSolo.appendChild(logo);

// Sélectionne David, Lucy
let david1 = document.querySelector(".david");
let lucy2 = document.querySelector(".lucy");
let mechantElement2 = document.querySelector(".mechant");

// Permet de bloquer l'animation et d'exécuter qu'une fois

//Config General Du Son
const audio1 = new Audio("assets/img/musique-jeux.mp3");
const audio2 = new Audio("assets/img/saut.wav");
const audio3 = new Audio("assets/img/bruit-de-pas.mp3");
const audio4 = new Audio("assets/img/saut.wav");
const audio5 = new Audio("assets/img/bruit-de-pas.mp3");
const masterVolume = 0.03;
audio1.volume = masterVolume;
audio2.volume = masterVolume;
audio3.volume = masterVolume;
audio4.volume = masterVolume;
audio5.volume = masterVolume;

let CantJumpDavid = false;
let CantJumpLucy = false;

// Permet d'exécuter le saut de David sur la touche ArrowUp
document.body.onkeyup = function (e) {
  if (e.code == "Space" && !CantJumpDavid) {
    CantJumpDavid = true;
    audio2.volume = masterVolume;
    audio2.play();
    david1.style.bottom = "300px";
    david1.style.transition = "0.9s";
    setTimeout(() => {
      audio3.volume = masterVolume;
      audio3.play();
      david1.classList.add("transition");
      david1.style.bottom = "180px";
      setTimeout(() => {
        CantJumpDavid = false;
      }, 1000);
    }, 999);
  }

  // Permet d'exécuter le saut de Lucy sur la touche Space
  if (e.code == "ArrowUp" && !CantJumpLucy) {
    CantJumpLucy = true;
    let audio4 = new Audio("assets/img/saut.wav");
    audio4.volume = masterVolume;

    audio4.play();
    lucy2.style.bottom = "300px";
    lucy2.style.transition = "0.9s";
    setTimeout(() => {
      const audio5 = new Audio("assets/img/bruit-de-pas.mp3");
      audio5.volume = masterVolume;
      audio5.play();
      lucy2.classList.add("transition");
      lucy2.style.bottom = "180px";
      setTimeout(() => {
        CantJumpLucy = false;
      }, 1000);
    }, 999);
  }

  // Fonction pour détecter la collision
  function detecterCollision() {
    // Positions des éléments
    var rect1 = david1.getBoundingClientRect();
    var rect2 = lucy2.getBoundingClientRect();
    var rect4 = mechantElement.getBoundingClientRect();

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
};
