"use strict";

const slider = document.querySelector(".pokemon-carousel__slider");
const cards = document.querySelectorAll(".pokemon-carousel__card");
const cards_lenght = document.querySelectorAll(
  ".pokemon-carousel__card"
).length;
const buttons = document.querySelectorAll(".pokemon-carousel__button");

let position = 0;
slider.style.width = `${cards_lenght * 100}%`;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (
      position == 0 &&
      button.classList.contains("pokemon-carousel__button--left")
    ) {
      slider.style.transform = `translateX(20px)`;
      setTimeout(() => {
        slider.style.transform = `translateX(${0}%)`;
      }, 250);
    } else if (
      position == cards_lenght - 1 &&
      button.classList.contains("pokemon-carousel__button--right")
    ) {
      slider.style.transform = `translateX(calc(${position * -(100 / cards_lenght)}% - 20px))`;
      setTimeout(() => {
        slider.style.transform = `translateX(${position * -(100 / cards_lenght)}%)`;
      }, 250);
    } else if (position >= 0 && position <= cards_lenght - 1) {
      if (button.classList.contains("pokemon-carousel__button--left")) {
        position--;
      }
      if (button.classList.contains("pokemon-carousel__button--right")) {
        position++;
      }
      slider.style.transform = `translateX(${position * -(100 / cards_lenght)}%)`;
    }
  });
});
