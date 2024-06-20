import { test, expect } from '@playwright/test';

test('addition works', async ({ page }) => {
    await page.goto('http://localhost:5173');
    await page.fill('[data-testid="calculator-input"]', '1+2');
    await page.click('[data-testid="calculator-button"]');
    await expect(page.locator('[data-testid="calculator-result"]')).toHaveText('Result: 3');
});

test('should show error if fields are empty', async ({ page }) => {
    await page.goto('http://localhost:5173');
    await page.fill('[data-testid="calculator-input"]', '');
    const errorMessage = page.locator('#error-message');
    await page.click('[data-testid="calculator-button"]');
    await expect(errorMessage).toHaveText('All fields are required.');
});