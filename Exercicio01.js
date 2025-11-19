// let login = prompt("Qual o seu nome? ")

// switch (login) {
//     case "Admin":
//         console.log("Nome correto")
//         break;

//     default:
//         console.log("Nome incorreto")
//         break;
// }

// let senha = prompt("Qual o sua senha? ")

// switch (senha) {
//     case "senha123":
//         console.log("Nome correto")
//         break;

//     default:
//         console.log("Nome incorreto")
//         break;
// }

let username = prompt("Digite o seu usuário: ")

let senha = prompt("Digite a sua senha: ")

if (username == "admin" && senha == "senha123") {
    console.log("Login bem-sucedido!")
}
else {
    console.log("Login incorreto! ;-;")
}