import { test } from '@playwright/test';
import { ai } from '@zerostep/playwright';

test('zerostep example', async ({ page }) => {
  await page.goto('https://www.kabum.com.br/');

  const aiArgs = { page, test };
  await ai('Click in search tab', aiArgs);
  await ai('Type Console PlayStation 5 Slim Sony', aiArgs);
  await ai('press enter', aiArgs);
});
