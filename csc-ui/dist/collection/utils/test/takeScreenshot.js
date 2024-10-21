export const takeScreenshot = async (page, description = null, pause = 1000) => {
  await new Promise((r) => setTimeout(r, pause));
  const results = !description
    ? await page.compareScreenshot()
    : await page.compareScreenshot(description);
  expect(results).toMatchScreenshot({
    allowableMismatchedPixels: 500,
    allowableMismatchedRatio: 0.2,
  });
};
//# sourceMappingURL=takeScreenshot.js.map
