class Pessoa {

    #nome;
    #endereco;

    constructor(nome, endereco) {
        this.nome = nome;
        this.#endereco = endereco;
    }

    get nome() {
        return this.#nome;
    }
    set nome(nome) {
        if (!nome || nome.length < 3) {
            throw new Error("O nome deve ter ao menos 3 caracteres.");
        }
        this.#nome = nome;
    }

    get endereco() {
        return this.#endereco;
    }
    set endereco(endereco) {
        this.#endereco = endereco;
    }

}

module.exports = Pessoa;
