import { clamp01, computeGradientColors } from '../effects.js';

describe('effects gradient helpers', () => {
  test('clamp01 clamps values to [0,1]', () => {
    expect(clamp01(-1)).toBe(0);
    expect(clamp01(0)).toBe(0);
    expect(clamp01(0.5)).toBe(0.5);
    expect(clamp01(1)).toBe(1);
    expect(clamp01(2)).toBe(1);
  });

  test('computeGradientColors returns two hsl strings with 60° separation', () => {
    const [c1, c2] = computeGradientColors(0.25); // hue1 ≈ 90, hue2 ≈ 150
    expect(c1).toMatch(/^hsl\(\d{1,3}, 85%, 60%\)$/);
    expect(c2).toMatch(/^hsl\(\d{1,3}, 85%, 60%\)$/);
  });
});


