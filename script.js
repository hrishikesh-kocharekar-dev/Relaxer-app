const text = document.getElementById("text");
const container = document.getElementById("container");
const totalTime = 7500;

const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

console.log(breatheTime, holdTime);

function breatheAnimation() {
  text.innerText = "Breathe in";
  container.className = "container grow";

  setTimeout(() => {
    text.innerText = "Hold";

    setTimeout(() => {
      text.innerText = "Breathe out";
      container.className = "container shrink";
    }, holdTime);
  }, breatheTime);
}
breatheAnimation();

// to stay in loop
setInterval(() => {
  breatheAnimation();
}, totalTime);
