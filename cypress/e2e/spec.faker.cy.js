import CadastrarPage from "./cadastrarPage";

const cadastrarPage = new CadastrarPage();



describe('Cadastro com Sucesso', () => {
  it('Acessar a página e realizar o Cadastro com sucesso', () => {
    cy.visit('https://front.serverest.dev');

    cy.getByData('cadastrar').click();
    cy.location('pathname').should('eq', '/cadastrarusuarios');

    cy.preencherFormulario();
    cy.getByData('cadastrar').click();
    cy.wait(500);
    cy.location('pathname').should('eq', '/home');
  });
});

