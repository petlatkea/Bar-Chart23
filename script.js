"use strict";

window.addEventListener("load", start); 

function start() {
  console.log("JavaScript kører");
  
  const bars = document.querySelectorAll(".bar");

  const firstBar = bars[0];

  const h = 50;

  firstBar.style.height = `${h}px`;
}
