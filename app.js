const bodyElement = document.querySelector("body");
const soundBtn = document.querySelector("button");
let isSoundEnabled = false;

soundBtn.addEventListener("click", () => {
  sound = new Audio("./Audio/relaxing-guitar.mp3");
  isSoundEnabled = true;
  enableSoundBtn.remove();
});

bodyElement.addEventListener("mousemove", (event) => {
  if (!isSoundEnabled) return;
  const xPos = event.offsetX;
  const yPos = event.offsetY;
  const spanElement = document.createElement("span");
  spanElement.style.left = xPos + "px";
  spanElement.style.top = yPos + "px";
  const size = Math.random() * 100;
  spanElement.style.width = size + "px";
  spanElement.style.height = size + "px";
  bodyElement.appendChild(spanElement);
  sound.currentTime = 0;
  sound.play();
  setTimeout(() => {
    spanElement.remove();
    sound.remove();
  }, 2000);
});
