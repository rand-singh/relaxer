const container = document.getElementById("container"),
  text = document.getElementById("text"),
  totalTime = 7500,
  breathTime = (totalTime / 5) * 2,
  holdTime = totalTime / 5;

breathAnimation();

function breathAnimation() {
  text.innerText = "Breath in";
  container.className = "container grow";

  setTimeout(() => {
    text.innerText = "Hold";

    setTimeout(() => {
      text.innerText = "Breath out";
      container.className = "container shrink";
    }, holdTime);
  }, breathTime);
}

setInterval(breathAnimation, totalTime);
