window.alert("Digite três números")

let n1 = parseFloat(prompt("Digite seu primeira número "))

let n2 = parseFloat(prompt("Digite seu segunda número "))

let n3 = parseFloat(prompt("Digite seu terceira número "))

if (n1 < n2 && n2 < n3) {
    alert("Os números estão em ordem crescente.");

}

if (n1 > n2 && n2 > n3) {
    alert("Os números estão em ordem decrescente.");
}
else if (n1 <= n2 && n2 >= n3) {
    alert("Os números estão aleatórios")
}