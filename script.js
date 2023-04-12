"use strict";

window.addEventListener("load", start); 

const data = [16, 30, 3, 29, 8, 18, 26, 5, 1, 31, 23, 6, 25, 17, 2, 10, 11, 20, 14, 15, 8, 0, 7, 4, 30, 22, 28, 11, 16, 9, 23, 27, 1, 7, 32, 31, 24, 19, 2, 13, 12];

function start() {
  console.log("JavaScript kører");
  
  const bars = document.querySelectorAll(".bar");

  const firstBar = bars[0];

  const h = 50;

  firstBar.style.height = `${h}px`;
}
