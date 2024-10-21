import { test, expect } from "@playwright/test";
test.beforeEach(async ({}, testInfo) => {
  testInfo.snapshotSuffix = '';
});
test('Variants', async ({ page }) => {
  await page.goto('http://localhost:4200/c-alert');
  const alert = page.locator('app-example[name="basic"] c-alert').first();
  await page
    .locator('label')
    .filter({ hasText: 'Default' })
    .locator('span')
    .first()
    .click();
  await expect(alert).toHaveScreenshot();
  await page.locator('#info span').first().click();
  await expect(alert).toHaveScreenshot();
  await page.locator('#success span').first().click();
  await expect(alert).toHaveScreenshot();
  await page.locator('#warning span').first().click();
  await expect(alert).toHaveScreenshot();
  await page.locator('#error span').first().click();
  await expect(alert).toHaveScreenshot();
});
//# sourceMappingURL=c-alert.visual.js.map
