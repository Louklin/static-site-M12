// Pure functions used for testing the gradient logic

export function clamp01(value) {
    if (Number.isNaN(value)) return 0;
    if (value < 0) return 0;
    if (value > 1) return 1;
    return value;
}

export function computeGradientColors(tNormalized) {
    const t = clamp01(tNormalized);
    const hue1 = Math.floor(360 * t);
    const hue2 = (hue1 + 60) % 360;
    const color1 = `hsl(${hue1}, 85%, 60%)`;
    const color2 = `hsl(${hue2}, 85%, 60%)`;
    return [color1, color2];
}


