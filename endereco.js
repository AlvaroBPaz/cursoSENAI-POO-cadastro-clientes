class Endereco{

    #logradouro;
    #numero;
    #cidade;
    #uf;

    constructor(logradouro, numero, cidade, uf){
        this.#logradouro = logradouro;
        this.#numero = numero;
        this.#cidade = cidade;
        this.#uf = uf;
    }

    get logradouro() {
        return this.#logradouro;
    }
    set logradouro(logradouro) {
        this.#logradouro = logradouro;
    }

    get numero() {
        return this.#numero;
    }
    set numero(numero) {
        this.#numero = numero;
    }

    get cidade() {
        return this.#cidade;
    }
    set cidade(cidade) {
        this.#cidade = cidade;
    }

    get uf() {
        return this.#uf;
    }
    set uf(uf) {
        this.#uf = uf;
    }

}

module.exports = Endereco;
