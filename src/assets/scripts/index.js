let container = document.querySelector(".container");
let image = document.createElement("img");
image.src = "assets/img/Personnage.PNG";
image.style.height = "100px";
image.style.position = "absolute";
image.style.bottom = "75px";
image.classList.add("mario");
container.appendChild(image);
let mario = document.querySelector(".mario");

let positionXMario = 30;

document.body.onkeyup = function (e) {
  if (e.key == " " || e.code == "Space" || e.keyCode == 32) {
    mario.style.bottom = "400px";
    mario.classList.add("transition");
    setTimeout(() => {
      mario.style.bottom = "75px";
    }, 999);
  }

  if (e.keyCode == "37") {
    positionXMario -= 30;
    mario.style.left = `${positionXMario}px`;
    mario.style.transition = "1s";
  } else if (e.keyCode == "39") {
    positionXMario += 30;
    mario.style.left = `${positionXMario}px  `;
    mario.style.transition = "1s";
  }
};

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
