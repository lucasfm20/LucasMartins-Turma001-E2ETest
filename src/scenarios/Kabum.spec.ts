import { test } from '@playwright/test';
import KabumPage from '../support/pages/KabumPages';

test.describe('Menu Kabum', () => {
  let kabumPage: KabumPage;

  test.beforeEach(async ({ page }) => {
    kabumPage = new KabumPage(page);
    await page.goto('https://www.kabum.com.br/');
  });

  test('Acessar Hardware, ordenar por preço decrescente e exibir 100 produtos', async () => {
    await kabumPage.clicarNoMenuComputadores();
    await kabumPage.validarRedirecionamentoComputadores();
    await kabumPage.selecionarPrecoDecrescente();
    await kabumPage.selecionar100PorPagina();
    await new Promise(r => setTimeout(r, 3000));
  });

  test('Clicar no menu Frete Grátis, ordenar por preço crescente', async () => {
    await kabumPage.clicarNoMenuFreteGratis();
    await kabumPage.validarRedirecionamentoFreteGratis();
    await kabumPage.selecionarPrecoCrescente();
    await new Promise(r => setTimeout(r, 3000));
  });
});
