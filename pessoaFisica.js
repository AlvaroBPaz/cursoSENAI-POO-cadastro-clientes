const Pessoa = require('./pessoa');

class PessoaFisica extends Pessoa {

    #cpf;
    #dataNascimento;

    constructor(nome, endereco, cpf, dataNascimento) {
        super(nome, endereco);
        this.cpf = cpf;
        this.dataNascimento = dataNascimento;
    }

    get cpf() {
        return this.#cpf;
    }
    set cpf(cpf) {
        let cpfLimpo = cpf.replaceAll(".", "").replaceAll("-", "");
        if (cpfLimpo.length !== 11) {
            throw new Error("O CPF deve ter 11 dígitos.");
        }
        this.#cpf = cpfLimpo;
    }

    get dataNascimento() {
        return this.#dataNascimento;
    }
    set dataNascimento(dataNascimento) {
        let data = new Date(dataNascimento);
        let hoje = new Date();
        if (isNaN(data.getTime()) || data > hoje) {
            throw new Error("A data de nascimento deve ser válida e não pode estar no futuro.");
        }
        this.#dataNascimento = dataNascimento;
    }

}

module.exports = PessoaFisica;
