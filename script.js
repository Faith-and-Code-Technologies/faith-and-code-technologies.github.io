// Smooth scrolling for navigation
document.querySelectorAll('header a').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      target.scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Easter Egg: Hidden Konami Code (Up, Up, Down, Down, Left, Right, Left, Right, B, A)
let keysPressed = [];
const secretCode = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

window.addEventListener("keydown", (event) => {
  keysPressed.push(event.key);
  keysPressed = keysPressed.slice(-secretCode.length);

  if (keysPressed.join("") === secretCode.join("")) {
    alert("You've unlocked the secret! Jesus loves you!");
  }
});
