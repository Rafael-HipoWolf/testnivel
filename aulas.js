
const precoGasolina = 6.99;
const precoEtanol = 5.99;
let kmPorLitros = 24;
let distanciaEmKM = 100;
let tipoCombustivel = "agua";

if (tipoCombustivel === "etanol") {
  combustivelGasto = (distanciaEmKM / kmPorLitros) * precoGasolina;
  console.log(
    `o veiculo vai gastar R$ ${combustivelGasto.toFixed(
      2
    )} para chegar no seu destino.`
  );
} else if (tipoCombustivel === "gasolina") {
  combustivelGasto = (distanciaEmKM / kmPorLitros) * precoEtanol;
  console.log(
    `o vaiculo vai gastar ${combustivelGasto.toFixed(3)} para chegar no destino`
  );
} else {
  console.log("veiculo não aceita esse tipo de combustivel");
}   

let nota1 = 7.2;
let nota2 = 7.1;
let nota3 = 7.1;
let media = (nota1 + nota2 + nota3) / 3;
console.log(`sua media é ${media.toFixed(1)}`);

if (media < 5) {
  console.log("aluno reprovou");
} else if (media >= 5 && media < 7) {
  console.log("recuperação");
} else {
  console.log("passou de semestre");
}   
let peso = 100;
let altura = 1.72;
let imc = peso / (altura * altura);
console.log(`seu IMC é ${imc.toFixed(2)}`);

if (imc < 18.5) {
  console.log("abaixo do peso");
} else if (imc >= 18.5 && imc < 25) {
  console.log(`peso normal`);
} else if (imc >= 25 && imc < 30) {
  console.log(`acima do peso`);
} else if (imc >= 30 && imc < 40) {
  console.log(`obeso`);
} else {
  console.log(`obesidade grave`);
}  

const precoEtiqueta = 100
const formaPagamento = 4

if (formaPagamento === 1) {
  console.log(precoEtiqueta - precoEtiqueta * 0.1)
} else if (formaPagamento === 2){
  console.log(precoEtiqueta - (precoEtiqueta * 0.15))
} else if (formaPagamento === 3){
  console.log(precoEtiqueta)
} else {
  console.log(precoEtiqueta + (precoEtiqueta * 0.1))
}



function incrementarJuros( valor, percentualJuros){
  const valorDeAcrecimo = (percentualJuros / 100) * valor
   return valor + valorDeAcrecimo
}

incrementarJuros()
console.log(incrementarJuros (200, 10))




function calcularImc (peso, altura){
  return  peso / Math.pow(altura, 2)
}

function classificarImc(imc){
if (imc < 18.5){
  return 'abaico do peso'
} else if (imc >= 18.5 && imc < 25){
  return 'peso normal'
}else if (imc >= 25 && imc < 30){
  return 'acima do peso'
} else if  (imc >= 30 && imc < 40){
  return 'obeso'
} else {
  return 'obesidade grave'
}
 
}

function main (){
const peso = 75
const altura = 1.75
const imc = calcularImc(peso, altura)
console.log(classificarImc(imc.toFixed(2)))
}

main() 

function aplicarDesconto(valor, desconto){
  return (valor - (valor * (desconto / 100)))
}

function aplicarJuros(valor, juros){
  return (valor + (valor * (juros / 100)))
}
const precoDaEtiqueta = 100
const formaDePagamento = 4

if (formaDePagamento === 1) {
  console.log(aplicarDesconto (precoDaEtiqueta, 10))
} else if ( formaDePagamento === 2){
  console.log(aplicarDesconto(precoDaEtiqueta, 15))
} else if(formaDePagamento === 3){
  console.log(precoDaEtiqueta)
} else {
  console.log(aplicarJuros(precoDaEtiqueta, 10))
}



class pessoa{
  nome 
  idade
  anoDeNascimento 

  constructor(nome, idade){
    this.nome = nome
    this.idade = idade
    this.anoDeNascimento = 2025 - idade
  }
  descrever(){
    console.log(`meu nome é ${this.nome} e minha idade é ${this.idade}`)
  }
}

const vitor = new pessoa('Rafael', 27)
const renan = new pessoa('renan', 30)

console.log(vitor)


class Carro {
  marca
  cor 
  mediaCombustivelPorKm

  constructor (marca, cor, mediaCombustivelPorKm){
    this.marca = marca
    this.cor = cor
    this.mediaCombustivelPorKm = mediaCombustivelPorKm
  }
  descrever(){
    console.log(`o veiculo ${this.marca} de cor ${this.cor} consome ${this.mediaCombustivelPorKm} por litro`)
  }

  calcularGastoDePercurso(distanciaKm, precoDeCombustivel){
    return distanciaKm * this.mediaCombustivelPorKm * precoDeCombustivel 
  }
}

const uno = new Carro ('fiat', 'prata', 1/12 )  // linha para definir o veiculo apenas. sem precisar criar mais codigos, orietação a objetos facilita codificar 
console.log(uno.calcularGastoDePercurso(70, 5).toFixed(2))
const palio = new Carro ('fiat', 'preto', 1/10)
console.log(palio.calcularGastoDePercurso(80, 5).toFixed(1))


class Pessoa {
  nome
  peso
  altura

constructor(nome, peso, altura){
  this.nome = nome
  this.peso = peso
  this.altura = altura
}
  calcularImc(){
  return this.peso / ( this.altura * this.altura)
  }
  classificarImc(){
    const imc = this.calcularImc()
    if (imc < 18.5) {
  return ("abaixo do peso");
} else if (imc >= 18.5 && imc < 25) {
  return  `peso normal`;
} else if (imc >= 25 && imc < 30) {
  return `acima do peso` ;
} else if (imc >= 30 && imc < 40) {
  return (`obeso`);
} else {
  return (`obesidade grave`);
}  
  }
}

const rafael = new Pessoa('Rafael', 180, 1.75)
console.log('Rafael')
console.log(rafael.classificarImc())

const nome = 'José Rafael Hipólito De Medeiros'
for (let i = 0; i < nome.length; i++) {
  const letra = nome[i];
  console.log(letra)
   
}



for (let i = 0; i <= 10; i++) {
 let numero = 5
 console.log(i * numero)
}
 
const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < numeros.length; i++) {
  const pares = numeros[i];
  if (pares % 2 === 0) {
    console.log(pares);
  }
}

const { gets, print } = require("./bolo");

const n = gets()
let maiorNumeroPar = 0
let menorNumeroImpar = 0 

for (let i = 0; i < n; i++) {
  const numero = gets()

  if (numero % 2 === 0) { // PAR
    if (numero > maiorNumeroPar) {
      maiorNumeroPar = numero
    }
  } else { // ÍMPAR
    if (menorNumeroImpar === 0 || numero < menorNumeroImpar) {
      menorNumeroImpar = numero
    }
  }
}

print(maiorNumeroPar)
print(menorNumeroImpar)
