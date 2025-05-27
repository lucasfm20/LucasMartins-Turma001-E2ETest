import { Page, expect } from '@playwright/test';
import KabumElements from '../elements/KabumElements';

export default class KabumPage {
  readonly kabumElements: KabumElements;

  constructor(readonly page: Page) {
    this.page = page;
    this.kabumElements = new KabumElements(page);
  }

  async clicarNoMenuComputadores(): Promise<void> {
    const btn = this.kabumElements.getComputadoresLink();
    await btn.waitFor({ state: 'visible' });
    await btn.click();
  }

  async validarRedirecionamentoComputadores(): Promise<void> {
    await expect(this.page).toHaveURL(
      'https://www.kabum.com.br/promocao/HARDWAREKABUM'
    );
  }

  async selecionarPrecoDecrescente(): Promise<void> {
    const select = this.kabumElements.getSelectOrdenar();
    await select.waitFor({ state: 'visible' });
    await select.selectOption('-price');
  }

  async selecionar100PorPagina(): Promise<void> {
    const select = this.kabumElements.getSelectQuantidadePorPagina();
    await select.waitFor({ state: 'visible' });
    await select.selectOption('100');
  }

  async clicarNoMenuFreteGratis(): Promise<void> {
    const btn = this.kabumElements.getFreteGratisLink();
    await btn.waitFor({ state: 'visible' });
    await btn.click();
  }

  async validarRedirecionamentoFreteGratis(): Promise<void> {
    await expect(this.page).toHaveURL(
      'https://www.kabum.com.br/promocao/FRETEGRATIS'
    );
  }

  async selecionarPrecoCrescente(): Promise<void> {
    const select = this.kabumElements.getSelectOrdenar();
    await select.waitFor({ state: 'visible' });
    await select.selectOption('price');
  }
}
