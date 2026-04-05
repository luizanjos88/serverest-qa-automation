import CadastrarPage from "../e2e/cadastrarPage";

const cadastrarPage = new CadastrarPage();


Cypress.Commands.add('getByData', (selector) => {
  return cy.get(`[data-testid="${selector}"]`)
})

Cypress.Commands.add('preencherFormulario', () => {
  cy.getByData('nome').type(cadastrarPage.nome);
  cy.getByData('email').type(cadastrarPage.email);
  cy.getByData('password').type(cadastrarPage.password);
})