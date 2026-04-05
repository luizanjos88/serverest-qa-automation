# Automação Serverest (QA)

Projeto de automação de testes E2E do [Serverest](https://front.serverest.dev), utilizando **Cypress**. 

O objetivo deste projeto é demonstrar a evolução de um roteiro de testes, começando com uma abordagem mais simples e evoluindo para a aplicação de boas práticas de QA, como o **Page Object Model** e uso de dados dinâmicos com a biblioteca **Faker**.

---

## 🛠️ Por que existem dois testes?

O projeto possui propositalmente dois arquivos de testes de cadastro para demonstrar diferentes formas de estruturar os testes E2E:

1. **`spec.cy.js` (Abordagem Básica):**
   - É um teste mais "straightforward" (direto ao ponto).
   - Utiliza dados fixos no código e um pequeno truque com `Date.now()` para evitar e-mails duplicados.
   - Muito útil para visualizar *exatamente* quais botões estão sendo clicados e qual texto está sendo digitado diretamente no teste.
   - Pode ficar difícil de manter se a aplicação crescer muito.

2. **`spec.faker.cy.js` (Abordagem Avançada):**
   - Utiliza **Page Objects** (`cadastrarPage.js`) para abstrair a camada de dados.
   - Os dados são gerados aleatoriamente em massa usando o pacote `@faker-js/faker` (garantindo nomes femininos/masculinos reais, e-mails formatados, etc.).
   - Utiliza **Comandos Customizados** do Cypress (`cypress/support/commands.js` como o comando de `preencherFormulario` e `getByData`).
   - É o padrão ouro de QA: o arquivo de testes fica limpo, lê-se como um passo a passo em linguagem humana, e a manutenção fica centralizada nas classes.

---

## 🚀 Tecnologias e Ferramentas
- [Node.js](https://nodejs.org/)
- [Cypress](https://www.cypress.io/)
- [Faker.js](https://fakerjs.dev/)

## 📦 Como Instalar e Rodar

1. **Pré-requisitos:** Tenha o Node instalado em sua máquina.
2. Clone o repositório:
```bash
git clone https://github.com/luizanjos88/serverest-qa-automation.git
```
3. Instale as dependências:
```bash
npm install
```
4. Para abrir o Cypress no modo interativo (Interface Gráfica):
```bash
npx cypress open
```
5. Para rodar todos os testes no terminal em modo 'headless':
```bash
npx cypress run
```
