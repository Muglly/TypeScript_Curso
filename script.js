// interface Pessoa{
//     nome: string,
//     idade: number
// }
function pessoa(par) {
    return par.nome;
}
console.log(pessoa({ nome: 'Rafael', idade: 26, altura: 1.82 }));
