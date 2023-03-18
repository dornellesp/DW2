function Desconto(valorVenda, convenio, cartao) {
    if (convenio && cartao) {
        // valorVenda = (valorVenda - (valorVenda * 0.15))
        console.log("Você possui desconto de 15%")
        return valorVenda = (valorVenda - (valorVenda * 0.15))
    } else if (convenio || cartao) {
        // valorVenda = (valorVenda - (valorVenda * 0.10))
        console.log("Você possui desconto de 10%")
        return valorVenda = (valorVenda - (valorVenda * 0.10))
    } else {
        console.log("Você não possui desconto")
        return valorVenda
    }
}

console.log(Desconto(100, true, true))
