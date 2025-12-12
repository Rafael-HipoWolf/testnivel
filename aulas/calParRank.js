function calcularNivel(vitorias, derrotas) {
    let saldoVitorias = vitorias - derrotas;
    let nivel = "";

    if (saldoVitorias <= 10) {
        nivel = "Ferro";
    } else if (saldoVitorias <= 20) {
        nivel = "Bronze";
    } else if (saldoVitorias <= 50) {
        nivel = "Prata";
    } else if (saldoVitorias <= 80) {
        nivel = "Ouro";
    } else if (saldoVitorias <= 90) {
        nivel = "Diamante";
    } else if (saldoVitorias <= 100) {
        nivel = "Lendário";
    } else { // maior que 100
        nivel = "Imortal";
    }

    
    return `O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`
}


console.log(calcularNivel(100, 29)); 

console.log(calcularNivel(60, 20));

