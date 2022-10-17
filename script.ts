// interface Pessoa{
//     nome: string,
//     idade: number
// }

// const pessoa: Pessoa = {
//     nome: 'Rafael',
//     idade: 26
// }

// console.log(pessoa.nome)

//CLASSES 

// class Pessoa{
//     nome: string;
//     idade: number;

//     constructor(nome:string, idade:number) {
//         this.nome = nome;
//         this.idade = idade;
//     }

//     getNome():string{
//         return this.nome;
//     }

//     getIdade():number{
//         return this.idade;
//     }

//     setNome(nome:string){
//         this.nome = nome;
//     }

//     setIdade(idade:number){
//         this.idade = idade
//     }
// }

// let pessoa: Pessoa = new Pessoa('João', 29);

// let pessoa2 = new Pessoa('Rafael', 26)

// pessoa2.setNome('Felipe')

// console.log(pessoa.getNome())
// console.log(pessoa2.getNome())

interface Pessoa{
    nome:string,
    idade?:number,
    altura?:number
}

function pessoa(par: Pessoa) {
    return par.nome
}

console.log(pessoa({nome:'Rafael', idade:26, altura:1.82}))