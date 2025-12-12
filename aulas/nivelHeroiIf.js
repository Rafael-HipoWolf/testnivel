let nomeHeroi = "Rafael"
let xpAtual = 9000
let nivel = ""
// a variavel de nivel vai ser alterada sempre que  o valor do  xpAtual mudar para o if que for verdadeiro
if (xpAtual <= 1000 ){ 
    nivel = "Ferro"
} else if (xpAtual <= 2000){
    nivel ="Bronze"
} else if (xpAtual<= 5000){
    nivel = "Prata"
} else if (xpAtual <= 7000){
    nivel = "Ouro"
} else if (xpAtual <= 8000){
    nivel = "Platina"
} else if (xpAtual <= 9000){
    nivel= "Ascendente"
} else if (xpAtual <= 10000){
    nivel= "Imortal"
}else {
    nivel ="Radiante"
}
console.log(`O Herói de nome ${nomeHeroi} está no nível de ${nivel}`);
