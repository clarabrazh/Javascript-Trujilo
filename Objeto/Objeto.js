// let mercedes = {
//     //caracteristicas - propriedades
//     modelo: "G63",
//     ano: 2025,
//     fabricante: "mercedes",
//     cor: "preto fosco",
//     acelerar() { //comportamento - métodos
//         console.log("Acelerando...vrum...vrumm...");
//     },
//     freiar() {
//         console.log("Freiando...");

//     }
// };

// console.log(mercedes.modelo);
// console.log(mercedes.acelerar());

//criar um objetivo professor Tadeu ou Jonas
//3 propriedades nome, NIF, salario
//2 comportamentos atribuir notaa e bater ponto
//além disso escolha mais uma propriedade e mais um comportamento

let Tadeu = {
    nome: "Felipe Tadeu",
    NIF: 1234576,
    Salário: 60.000,
    datanasc: new Date(2000, 5, 13),
    hobbies: ["jogar jogos online", "fazer pizza com a vó"],

    atribuirnotas() {
    },

    baterponto() {
        let horariobatido = new Date(2025, 10, 28, 17,);
        console.log(horariobatido);

    }

};
console.log(Tadeu.hobbies)
console.log(Tadeu.datanasc);
console.log(Tadeu.baterponto);