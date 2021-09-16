/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

window.onload = function() {
  //write your code here
  var valorCarta = random(1, 12);
  var palo = "♦";
  var colorPalo = "red";

  /* valores palos 
    1 = spade 
    2 = club
    3 = heart
    4 = diamond
  */
  var nuevoPalo = random(1, 4);
  if (nuevoPalo == 1 || nuevoPalo == 2) {
    colorPalo = "black";
  }
  if (nuevoPalo == 3 || nuevoPalo == 4) {
    colorPalo = "red";
  }

  if (nuevoPalo == 1) palo = "♠";
  if (nuevoPalo == 2) palo = "♣";
  if (nuevoPalo == 3) palo = "♥";
  if (nuevoPalo == 4) palo = "♦";

  var paloSup = document.getElementById("EsqSuperior");
  paloSup.style.color = colorPalo;
  paloSup.textContent = palo;
  var paloInf = document.getElementById("EsqInferior");
  paloInf.style.color = colorPalo;
  paloInf.textContent = palo;
  var nroCarta = document.getElementById("numeroCarta");
  nroCarta.textContent = valorCarta;
  console.log("Hello Rigo from the console!");
};
