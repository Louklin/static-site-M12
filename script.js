
// script.js
function showMessage() {
    const p = document.getElementById('message') // Ommitting JS Linter Test
    if (p) {
        p.textContent = "The JS is running and the UI is under review!";
    }
}

showMessage();

// Animated gradient that runs on page load
let gradientAnimationId = null;

function startAnimatedGradient(durationMs = 8000, stopAfterMs = 10000) {
    const startTime = performance.now();

    const animate = (now) => {
        const elapsed = (now - startTime) % durationMs;
        const t = elapsed / durationMs; // 0..1

        const hue1 = Math.floor(360 * t);
        const hue2 = (hue1 + 60) % 360;

        document.body.style.background = `linear-gradient(135deg, hsl(${hue1}, 85%, 60%), hsl(${hue2}, 85%, 60%))`;
        gradientAnimationId = requestAnimationFrame(animate);
    };

    if (gradientAnimationId) {
        cancelAnimationFrame(gradientAnimationId);
    }
    gradientAnimationId = requestAnimationFrame(animate);

    // Stop after a short period to avoid distraction and reduce CPU usage
    setTimeout(() => {
        if (gradientAnimationId) {
            cancelAnimationFrame(gradientAnimationId);
            gradientAnimationId = null;
        }
    }, stopAfterMs);
}

document.addEventListener('DOMContentLoaded', () => {
    startAnimatedGradient();
});
