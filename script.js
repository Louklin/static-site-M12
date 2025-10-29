
// script.js
function showMessage() {
    const p = document.getElementById('message');
    if (p) {
        p.textContent = "The JS is running and the UI is under review!" // OMITTING SEMICOLON (The intentional error)
    }
}

showMessage();
