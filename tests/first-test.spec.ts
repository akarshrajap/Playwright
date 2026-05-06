import { test, expect } from '@playwright/test';

test('Playwright Official Website Test', async ({ page }) => {
  // 1. Navigate to Playwright official website
  await page.goto('https://playwright.dev/', { waitUntil: 'domcontentloaded' });

  // 2. Verify the page title contains "Playwright"
  await expect(page).toHaveTitle(/Playwright/);

  // 3. Verify navigation link exists and is visible
  const getStartedLink = page.getByRole('link', { name: 'Get started' });
  await expect(getStartedLink).toBeVisible();
});