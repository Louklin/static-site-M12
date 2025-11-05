// Demonstration of a failing test (skipped by default). Remove .skip to see CI fail.
test.skip('intentional failing demo', () => {
  expect(1 + 1).toBe(3);
});
