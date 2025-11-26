window.alert("Digite o valor total da sua compra em R$: ")

let valorcompra = parseFloat(prompt("Qual o valor total da compra?"))

let desconto = 0

if (valorcompra <= 100) {
    desconto = 0;
} else if (valorcompra <= 200) {
    desconto = valorcompra * 0.10;
} else {
    desconto = valorcompra * 0.20;
}

let valorFinal = valorcompra - desconto;

alert("Valor da compra: R$ " + valorcompra)

alert("Desconto aplicado: R$ " + desconto)

alert("Valor final a pagar: R$ " + valorFinal)