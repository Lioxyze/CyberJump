// class Personnage {
//   constructor(jump, life, Pseudo) {
//     this.jump = jump;
//     this.life = life;
//     this.life = Pseudo;
//   }
//   spawnPersonnage() {
//     let container = document.querySelector("body");
//     let Perso1 = document.createElement("img");
//     Perso1.src = "assets/img/Personnage.PNG";
//     Perso1.style.height = "100px";
//     Perso1.style.position = "absolute";
//     Perso1.style.right = "590px";
//     Perso1.style.bottom = "70px";
//     Perso1.classList.add("david");
//     container.appendChild(Perso1);
//   }

//   sauter() {
//     let david = document.querySelector(".david");
//     document.body.onkeyup = function (e) {
//       if (e.key == " " || e.code == "Space" || e.keyCode == 32) {
//         david.style.bottom = "200px";
//         david.style.transition = "1s";
//         david.classList.add("transition");
//         setTimeout(() => {
//           david.style.bottom = "70px";
//         }, 999);
//         david.style.transition = "1s";
//       }
//     };
//   }
// }

let container = document.querySelector("body");
let Perso1 = document.createElement("img");
let Perso2 = document.createElement("img");
Perso1.src = "assets/img/Personnage.PNG";
Perso2.src = "assets/img/Lucy.png";
Perso1.style.height = "100px";
Perso2.style.height = "100px";
Perso1.style.position = "absolute";
Perso2.style.position = "absolute";
Perso1.style.right = "750px";
Perso2.style.right = "450px";
Perso1.style.bottom = "180px";
Perso2.style.bottom = "175px";
Perso1.classList.add("david");
Perso2.classList.add("lucy");
container.appendChild(Perso1);
container.appendChild(Perso2);

let david = document.querySelector(".david");
let lucy = document.querySelector(".lucy");

let positionXMario = 0;

let CantJumpDavid = false;
let CantJumpLucy = false;

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

  if ((e.key == " " || e.code == "Space" || e.keyCode == 32) && !CantJumpLucy) {
    CantJumpLucy = true;
    lucy.style.bottom = "300px";
    lucy.style.transition = "1s";
    setTimeout(() => {
      lucy.classList.add("transition");
      lucy.style.bottom = "180px";
      setTimeout(() => {
        CantJumpLucy = false;
      }, 1000); // Temps de l'animation (1s) + 1ms pour assurer qu'il a fini
    }, 999);
  }
};

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

// let container = document.querySelector(".container");
// let image = document.createElement("img");
// image.src = "assets/img/Personnage.PNG";
// image.style.height = "100px";
// image.style.position = "absolute";
// image.style.bottom = "75px";
// image.classList.add("mario");
// container.appendChild(image);
// let mario = document.querySelector(".mario");

// let positionXMario = 30;

// document.body.onkeyup = function (e) {
//   if (e.key == " " || e.code == "Space" || e.keyCode == 32) {
//     mario.style.bottom = "400px";
//     mario.classList.add("transition");
//     setTimeout(() => {
//       mario.style.bottom = "75px";
//     }, 999);
//   }

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
