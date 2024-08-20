/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { left } from "@popperjs/core";

window.onload = function() {
  //write your code here
  let suit = ["♦", "♥", "♠", "♣"];
  let numeros = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];

  function randomize(array) {
    return Math.floor(Math.random() * array.length);
  }

  function generateCard() {
    let randomSuit = randomize(suit);
    let randomNumero = randomize(numeros);

    document.querySelector(".top-left").innerHTML = suit[randomSuit];
    document.querySelector(".bottom-right").innerHTML = suit[randomSuit];
    document.querySelector(".numero").innerHTML = numeros[randomNumero];

    if (suit[randomSuit] === "♦" || suit[randomSuit] === "♥") {
      document.querySelector(".top-left").style.color = "red";
      document.querySelector(".bottom-right").style.color = "red";
      document.querySelector(".numero").style.color = "red";
    } else {
      document.querySelector(".top-left").style.color = "black";
      document.querySelector(".bottom-right").style.color = "black";
      document.querySelector(".numero").style.color = "black";
    }
  }

  let newCardButton = document.getElementById("button");
  newCardButton.addEventListener("click", generateCard);
};
