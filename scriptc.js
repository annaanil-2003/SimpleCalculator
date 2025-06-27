const display = document.getElementById("texts");
const enterBtn = document.querySelector(".enter-btn");
const buttons = document.querySelectorAll(".cont1, .cont2");
buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    // check if this is the delete button
    if (btn.classList.contains("cont2")) {
      display.value = display.value.slice(0, -1);
    } else {
      display.value += btn.textContent.trim();
    }
  });
});

enterBtn.addEventListener("click", () => {
  try {
    display.value = eval(display.value);  
  } catch {
    display.value = "Error";
  }
});
