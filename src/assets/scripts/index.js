// Sélectionne le conteneur
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

// Sélectionne David et Lucy
let david = document.querySelector(".david");
let lucy = document.querySelector(".lucy");

// Définit une fonction pour mettre à jour le score
function updateScore() {
  score++; // Incrémente le score
  document.getElementById("score").innerText = score; // Met à jour l'affichage du score
}

let score = 0; // Initialise le score à 0
updateScore(); // Met à jour l'affichage initial du score
setInterval(updateScore, 1000);

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
      david.classList.add("transition");
      david.style.bottom = "180px";
      setTimeout(() => {
        CantJumpDavid = false;
      }, 1000);
    }, 999);
  }

  // Met à jour le score
  updateScore();

  // Permet d'exécuter le saut de Lucy sur la touche Space
  if ((e.key == " " || e.code == "Space" || e.keyCode == 32) && !CantJumpLucy) {
    CantJumpLucy = true;
    lucy.style.bottom = "300px";
    lucy.style.transition = "1s";
    setTimeout(() => {
      lucy.classList.add("transition");
      lucy.style.bottom = "180px";
      setTimeout(() => {
        CantJumpLucy = false;
      }, 1000);
    }, 999);
  }

  // let david = { x: 5, y: 5 };
  // let mechant = { x: 20, y: 10 };

  // if (
  //   david.x < mechant.x + mechant.width &&
  //   david.x + david.width > mechant.x &&
  //   david.y < mechant.y + mechant.height &&
  //   david.height + david.y > mechant.y
  // ) {
  //   // collision détectée !
  // }
};
// const random = document.querySelector(".mechant");
// random.style.setProperty("--animation-time", time + "s");

//   if (e.keyCode == "37") {
//     positionXMario -= 30;
//     mario.style.left = `${positionXMario}px`;
//     mario.style.transition = "1s";
//   } else if (e.keyCode == "39") {
//     positionXMario += 30;
//     mario.style.left = `${positionXMario}px  `;
//     mario.style.transition = "1s";
//   }
// };

// const random = document.querySelector(".mechant");
// random.style.setProperty("--animation-time", time + "s");
