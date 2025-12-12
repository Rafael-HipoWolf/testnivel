class heroi {
    constructor(nome, idade, tipo){ //constructor é obrigatorio depois define os parametros
        this.nome = nome  // o this. é como o let ou const
        this.idade =idade
        this.tipo = tipo

        this.ataques = { // aqui vai ser responsavel pela resposta no final, oque tiver antes dos : vai ser chamado nalinha final
            mago: "magia", // tem que ser os : não = e deve terminar com ,
            guerreiro: "espada",
            monge: "artes maciais",
            ninja: "shuriken"
        }
    }
    atacar(){ //tem que ter os () 
        const ataque= this.ataques[this.tipo]
        console.log(`o ${this.tipo} atacou usando ${ataque}`)
    }
}
const heroi1 = new heroi ("rafael",27, "mago")
heroi1.atacar()