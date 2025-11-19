window.alert("Digite três números")

let n1 = parseFloat(prompt("Digite seu primeira número "))

let n2 = parseFloat(prompt("Digite seu segunda número "))

let n3 = parseFloat(prompt("Digite seu terceira número "))

if (n1 < n2 && n2 < n3) {
    console.log("Os números estão em ordem crescente.");
} else {
    console.log("Os números NÃO estão em ordem crescente.");
}