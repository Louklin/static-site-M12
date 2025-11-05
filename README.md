# static-site-M12
JS Linter Test --
In script.js

// script.js
function showMessage() {
    const p = document.getElementById('message') // Ommitting JS Linter Test
    if (p) {
        p.textContent = "The JS is running and the UI is under review!";
    }
}

function changeBackgroundColor() {
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = randomColor;
}
showMessage();
    CHANGE:    const p = document.getElementById('message') // Ommitting JS Linter Test TO    const p = document.getElementById('message'); // Ommitting JS Linter Test

JS testing framework and test job --
Located in tests/demoFail.test.js
Demonstration of a failing test. Remove .skip to see CI fail test
