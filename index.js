const Endereco = require('./endereco');
const PessoaFisica = require('./pessoaFisica');
const PessoaJuridica = require('./pessoaJuridica');

const clientes = [];

// Teste 1: Pessoa física válida
try {
    const end1 = new Endereco("Rua das Flores", 120, "Natal", "RN");
    const pf1 = new PessoaFisica("Álvaro Paz", end1, "123.456.789-01", "1998-05-15");
    clientes.push(pf1);
    console.log("Cadastro realizado com sucesso:", pf1.nome);
} catch (erro) {
    console.log("Erro ao cadastrar pessoa física:", erro.message);
}

// Teste 2: Pessoa jurídica válida
try {
    const end2 = new Endereco("Av. Salgado Filho", 1500, "Natal", "RN");
    const pj1 = new PessoaJuridica("Electronic", end2, "12.345.678/0001-99", "Electronic Comercio de Eletronicos Ltda");
    clientes.push(pj1);
    console.log("Cadastro realizado com sucesso:", pj1.nome);
} catch (erro) {
    console.log("Erro ao cadastrar pessoa jurídica:", erro.message);
}

// Teste 3: Pessoa física inválida (CPF com menos de 11 dígitos)
try {
    const end3 = new Endereco("Rua João Pessoa", 45, "Mossoró", "RN");
    const pf2 = new PessoaFisica("João Silva", end3, "123.456", "1995-10-20");
    clientes.push(pf2);
    console.log("Cadastro realizado com sucesso:", pf2.nome);
} catch (erro) {
    console.log("Erro ao cadastrar pessoa física:", erro.message);
}

// Teste 4: Pessoa jurídica inválida (razão social vazia)
try {
    const end4 = new Endereco("Rua Central", 80, "Caicó", "RN");
    const pj2 = new PessoaJuridica("Tech Loja", end4, "98.765.432/0001-10", "");
    clientes.push(pj2);
    console.log("Cadastro realizado com sucesso:", pj2.nome);
} catch (erro) {
    console.log("Erro ao cadastrar pessoa jurídica:", erro.message);
}

// Exibindo apenas os cadastros válidos
console.log("\n--- Clientes Cadastrados ---");

for (let i = 0; i < clientes.length; i++) {
    const c = clientes[i];
    console.log("Nome:", c.nome);

    if (c instanceof PessoaFisica) {
        console.log("CPF:", c.cpf);
        console.log("Data de Nascimento:", c.dataNascimento);
    } else if (c instanceof PessoaJuridica) {
        console.log("CNPJ:", c.cnpj);
        console.log("Razão Social:", c.razaoSocial);
    }

    console.log("Endereço:", c.endereco.logradouro + ", " + c.endereco.numero + " - " + c.endereco.cidade + "/" + c.endereco.uf);
    console.log("----------------------------");
}
