

describe('Cadastro com Sucesso', () => {
  it('Acessar a página e realizar o Cadastro com sucesso', () => {
    cy.visit('https://front.serverest.dev');

    cy.getByData('cadastrar').click();
    cy.location('pathname').should('eq', '/cadastrarusuarios');

    cy.getByData('nome').type('Luiz Carlos Giachello dos Anjos');
    cy.getByData('email').type('luiz.giachello+' + Date.now() + '@gmail.com');
    cy.getByData('password').type('123456');
    cy.getByData('cadastrar').click();
    cy.location('pathname').should('eq', '/home');
  });
});

