import { faker } from '@faker-js/faker';

class CadastrarPage {
    constructor() {
        this.nome = faker.person.fullName();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }

    dadosCadastrar() {
        return {
            nome: this.nome,
            email: this.email,
            password: this.password
        }

    }
}

export default CadastrarPage;