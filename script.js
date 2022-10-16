// interface Pessoa{
//     nome: string,
//     idade: number
// }
// const pessoa: Pessoa = {
//     nome: 'Rafael',
//     idade: 26
// }
// console.log(pessoa.nome)
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    Pessoa.prototype.getNome = function () {
        return this.nome;
    };
    Pessoa.prototype.getIdade = function () {
        return this.idade;
    };
    Pessoa.prototype.setNome = function (nome) {
        this.nome = nome;
    };
    Pessoa.prototype.setIdade = function (idade) {
        this.idade = idade;
    };
    return Pessoa;
}());
var pessoa = new Pessoa('João', 29);
var pessoa2 = new Pessoa('Rafael', 26);
pessoa2.setNome('Felipe');
console.log(pessoa.getNome());
console.log(pessoa2.getNome());
