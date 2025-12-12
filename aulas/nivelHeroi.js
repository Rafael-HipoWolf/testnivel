let nomeHeroi = "Rafael";
let xpAtual = 4685;
let nivel = "";

switch (true) {
    case xpAtual < 1000:
        nivel = "Ferro";
        break;
    case xpAtual >= 1001 && xpAtual <= 2000:
        nivel = "Bronze";
        break;
    case xpAtual >= 2001 && xpAtual <= 5000:
        nivel = "Prata";
        break;
    case xpAtual >= 5001 && xpAtual <= 7000:
        nivel = "Ouro";
        break;
    case xpAtual >= 7001 && xpAtual <= 8000:
        nivel = "Platina";
        break;
    case xpAtual >= 8001 && xpAtual <= 9000:
        nivel = "Ascendente";
        break;
    case xpAtual >= 9001 && xpAtual <= 10000:
        nivel = "Imortal";
        break;
    case xpAtual >= 10001:
        nivel = "Radiante";
        break;
    default:

        nivel = "Indefinido"; 
}


console.log(`O Herói de nome ${nomeHeroi} está no nível de ${nivel}`);