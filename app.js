const colors = ["A", "B", "C", "D", "E", "F", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const btn = document.querySelector('#btn');

btn.addEventListener('click', function() {
  let hexColor = "#";
  for (i = 0; i < 6; i++) {
  hexColor += colors[getRandomNumber()];
  }
  document.body.style.backgroundColor = hexColor;
})

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}