const nomeAventureiro = 'Rafael Hipólito'
const idade = 27
const classe = 'Aventureiro'
const nivelAtual = 5
let progresso = 87.3 
let xpAtual = 4365
const metaNivel5XP = 6000
xpAtual = xpAtual + 100
const diasAtivos = 18
const missoesCompletas = 22
const nomeItem = 'medalhão do Viajante'
const habilidade = 'increased Focus'
let habilidadeAtiva = true 
let paginas = 184
let totalMinutos = 330
let penalidadesFeitas = 7
penalidadesFeitas = penalidadesFeitas + 1
let xpProximoNivel = metaNivel5XP - xpAtual
let coinberry = 1


console.log(`O ${classe} se chama ${nomeAventureiro} ele está no nível ${nivelAtual}`)
console.log(`você está com ${xpAtual} de XP. para o proximo nivel você precisa de ${metaNivel5XP} de XP para subir de nivel`)
console.log(`você precisa de ${xpProximoNivel} para subir de nivel`)


if (xpAtual >= metaNivel5XP){
    console.log('Parabens! Nível alcançado.')
} else { 
    console.log('Continue o foco! ainda te falta XP.')
}


console.log('O SISTEMA tem uma missão para você. vamos verificar se seu inventairo esta cheio e se você tem enegia disponivel para realizar a missão')


let nivelDeEnergia = 10
let inventario = 10 


if (nivelDeEnergia >= 5 && inventario <=9){
    console.log('Missão aceita')
} else { 
    console.log('Verifique a energia ou libere limite no seu invetario')
}

if (missoesCompletas >= diasAtivos && diasAtivos > 10 ){
    console.log(`A consistência está impecável. + 5 Coinberry de Bônus.`)
    coinberry = coinberry + 5 
console.log(`você tem ${coinberry} coinberry's`)
} else {
    console.log("É preciso recuperar o ritmo. Menos missões que dias ativos.")
}

if(!habilidadeAtiva && habilidade === 'increased Focus' ){
    console.log("Elixir de Foco usado! Bônus de XP aplicado.")
} else {
    console.log("A habilidade já está ativa. Não é possível usar o elixir agora.")
}

const temChaveDescanso = false
const temMoedaOuro = false

if (temChaveDescanso  || temMoedaOuro ){
    console.log("Acesso liberado à Câmara do Conhecimento!")
} else {
    console.log("Nenhuma chave encontrada. Acesso negado.")
}