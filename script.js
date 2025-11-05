
// script.js
function showMessage() {
    const p = document.getElementById('message');
    if (p) {
        p.textContent = "The JS is running and the UI is under review!" // OMITTING SEMICOLON (The intentional error)
    }
}

function changeBackgroundColor() {
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = randomColor;
}
showMessage();
