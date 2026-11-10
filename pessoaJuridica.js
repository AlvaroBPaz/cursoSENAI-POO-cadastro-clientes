const Pessoa = require('./pessoa');

class PessoaJuridica extends Pessoa {

    #cnpj;
    #razaoSocial;

    constructor(nome, endereco, cnpj, razaoSocial) {
        super(nome, endereco);
        this.cnpj = cnpj;
        this.razaoSocial = razaoSocial;
    }

    get cnpj() {
        return this.#cnpj;
    }
    set cnpj(cnpj) {
        let cnpjLimpo = cnpj.replaceAll(".", "").replaceAll("-", "").replaceAll("/", "");
        if (cnpjLimpo.length !== 14) {
            throw new Error("O CNPJ deve ter 14 dígitos.");
        }
        this.#cnpj = cnpjLimpo;
    }

    get razaoSocial() {
        return this.#razaoSocial;
    }
    set razaoSocial(razaoSocial) {
        if (!razaoSocial || razaoSocial.trim() === "") {
            throw new Error("A razão social é obrigatória.");
        }
        this.#razaoSocial = razaoSocial;
    }

}

module.exports = PessoaJuridica;
