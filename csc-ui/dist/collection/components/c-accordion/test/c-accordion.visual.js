import { test, expect } from "@playwright/test";
test.beforeEach(async ({}, testInfo) => {
  testInfo.snapshotSuffix = '';
});
test('Default', async ({ page }) => {
  await page.goto('http://localhost:4200/c-accordion');
  const accordion = page
    .locator('app-example[name="basic"] c-accordion')
    .first();
  await expect(accordion).toHaveScreenshot();
  const firstItem = accordion.locator('c-accordion-item button').first();
  await firstItem.click();
  await expect(accordion).toHaveScreenshot();
  const secondItem = accordion.locator('c-accordion-item button').nth(1);
  await secondItem.click();
  await expect(accordion).toHaveScreenshot();
});
test('Mandatory selection', async ({ page }) => {
  await page.goto('http://localhost:4200/c-accordion');
  const accordion = page
    .locator('app-example[name="mandatory"] c-accordion')
    .first();
  await expect(accordion).toHaveScreenshot();
  const firstItem = accordion.locator('c-accordion-item button').first();
  await firstItem.click();
  await expect(accordion).toHaveScreenshot();
  const secondItem = accordion.locator('c-accordion-item button').nth(1);
  await secondItem.click();
  await expect(accordion).toHaveScreenshot();
});
test('Multiple selection', async ({ page }) => {
  await page.goto('http://localhost:4200/c-accordion');
  const accordion = page
    .locator('app-example[name="multiple"] c-accordion')
    .first();
  await expect(accordion).toHaveScreenshot();
  const secondItem = accordion.locator('c-accordion-item button').nth(1);
  await secondItem.click();
  await expect(accordion).toHaveScreenshot();
  await accordion.locator('c-accordion-item button').nth(0).click();
  await accordion.locator('c-accordion-item button').nth(1).click();
  await accordion.locator('c-accordion-item button').nth(2).click();
  await expect(accordion).toHaveScreenshot();
});
test('Outlined', async ({ page }) => {
  await page.goto('http://localhost:4200/c-accordion');
  const accordion = page
    .locator('app-example[name="outlined"] c-accordion')
    .first();
  await expect(accordion).toHaveScreenshot();
});
//# sourceMappingURL=c-accordion.visual.js.map
