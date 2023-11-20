"use strict";

const slider = document.querySelector(".pokemon-carousel__slider");
const cards = document.querySelectorAll(".pokemon-carousel__card").length;
const buttons = document.querySelectorAll(".pokemon-carousel__button");

let position = 0;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (
      position == 0 &&
      button.classList.contains("pokemon-carousel__button--left")
    ) {
      position = 0;
    } else if (
      position == cards-1 &&
      button.classList.contains("pokemon-carousel__button--right")
    ) {
      position = cards-1;
    } else if (position >= 0 && position <= cards-1) {
      if (button.classList.contains("pokemon-carousel__button--left")) {
        position--;
      } else if (button.classList.contains("pokemon-carousel__button--right")) {
        position++;
      }
      console.log(position);
      const transition = position * -(100 / cards);
      slider.style.transform = `translateX(${transition}%)`;
    }
  });
});
