const inputEl = document.querySelector("input");
const buttonEl = document.querySelector("button");
const timerEl = document.querySelector("span");

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl

const createTimerAnimator = (sec) => {
  function updateClock() {
    const hours = Math.floor(sec / 3600);
    const minutes = Math.floor((sec % 3600) / 60);
    const seconds = sec % 60;

    timerEl.innerHTML = `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

    sec++;

    if (sec >= 0) {
      setTimeout(updateClock, 1000);
    }
  }
  updateClock();
};

inputEl.addEventListener("input", () => {
  // Очистите input так, чтобы в значении
  // оставались только числа
  inputEl.value = inputEl.value.replace(/[^\d,]/g, "");
});

buttonEl.addEventListener("click", () => {
  let seconds = parseInt(inputEl.value);
  createTimerAnimator(seconds);
});
