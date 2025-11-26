window.alert("Diga seu peso em quilogramas e sua altura em metros")

let peso = parseFloat(prompt("Digite seu peso em quilograma: "));

let altura = parseFloat(prompt("Digite sua altura em metros: "));

let IMC = (peso / (altura * altura));

if (IMC <= 18.5) {
    alert("Abaixo do peso")
}
else if (IMC >= 18.5 && IMC <= 24.9) {
    alert("Peso normal")
}
else if (IMC >= 25.0 && IMC <= 29.9) {
    alert("Sobrepeso")
}
else if (IMC >= 30.0 && IMC <= 34.9) {
    alert("Obesidade grau 1")
}
else if (IMC >= 35.0 && IMC <= 39.9) {
    alert("Obesidade grau 2")
}
else if (IMC >= 40.0) {
    alert("Obesidade grau 3. Se cuide por favor!")
}
