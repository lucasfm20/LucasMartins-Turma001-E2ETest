import { Locator, Page } from '@playwright/test';

export default class KabumElements {
  constructor(readonly page: Page) {
    this.page = page;
  }

  getComputadoresLink(): Locator {
    return this.page.getByRole('link', {
      name: 'Botão do menu (Hardware)'
    });
  }

  getFreteGratisLink(): Locator {
    return this.page.getByRole('link', {
      name: 'Botão do menu (Frete Grátis)'
    });
  }

  getSelectOrdenar(): Locator {
    return this.page.locator('select.sc-5a083586-0.eGIppJ');
  }

  getSelectQuantidadePorPagina(): Locator {
    return this.page.locator('select.sc-dcf1314f-0.BUhUd');
  }
}
