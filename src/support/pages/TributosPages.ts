import { Page, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import TributosElements from '../elements/TributosElements';
import BasePage from './BasePage';

export default class TributosPage extends BasePage {
  readonly tributosElements: TributosElements;

  constructor(readonly page: Page) {
    super(page);
    this.page = page;
    this.tributosElements = new TributosElements(page);
  }

  async preencherFormulario(): Promise<void> {
    await this.tributosElements.getBotaoNovoCadastro().click();
    await this.tributosElements.getCampoNome().fill(faker.person.firstName());
    await this.tributosElements.getCampoCpf().fill('33223745050');
    await this.tributosElements.getCampoEmail().fill('a@b.com.br');
    await this.tributosElements.getCampoWhatsapp().fill('48 999998888');
    await this.tributosElements.getCampoCep().fill('88817070');
    await this.tributosElements.getBotaoBuscarCep().click();
    await this.tributosElements.getCampoNumero().fill('10');
    await this.tributosElements.getCampoComplemento().fill(faker.word.words());
    await this.tributosElements.getCampoMetodoEntrega().click();
    await this.tributosElements
      .getCampoAnexo()
      .setInputFiles('src/support/fixtures/cnh_testes.jpg');
    await this.tributosElements.getBotaoCadastrar().click();
  }

  async validarCadastro(): Promise<void> {
    await expect(this.tributosElements.getMessageOK()).toBeVisible();
  }
}
