import { test, expect } from '@playwright/test';

test.describe('Calculator', () => {
  test.beforeEach(async ({ page }) => {
    // Mock any external requests (e.g., Google Fonts)
    await page.route('https://fonts.googleapis.com/**', (route) => route.abort());
    await page.goto('/calculator.html');
  });

  test('displays 0 on load', async ({ page }) => {
    const result = page.locator('#result');
    await expect(result).toHaveText('0');
  });

  test('addition: 1 + 2 = 3', async ({ page }) => {
    await page.click('[data-value="1"]');
    await page.click('[data-action="op"][data-value="+"]');
    await page.click('[data-value="2"]');
    await page.click('[data-action="equals"]');
    await expect(page.locator('#result')).toHaveText('3');
  });

  test('division by zero shows error', async ({ page }) => {
    await page.click('[data-value="1"]');
    await page.click('[data-action="op"][data-value="÷"]');
    await page.click('[data-value="0"]');
    await page.click('[data-action="equals"]');
    await expect(page.locator('#result')).toHaveText('ゼロ除算');
  });

  test('clear resets to 0', async ({ page }) => {
    await page.click('[data-value="5"]');
    await page.click('[data-action="clear"]');
    await expect(page.locator('#result')).toHaveText('0');
  });
});
