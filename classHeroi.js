class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    atacar() {
        let ataque;

        if (this.tipo === "guerreiro") ataque = "espada";
        else if (this.tipo === "mago") ataque = "magia";
        else if (this.tipo === "monge") ataque = "artes marciais";
        else if (this.tipo === "ninja") ataque = "shuriken";

        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }

    escrever() {
        console.log(`Meu nome é ${this.nome} e eu tenho ${this.idade} anos`);
    }
}

// criando um herói
let heroi1 = new Heroi("Rafael", 27, "guerreiro");

heroi1.escrever();
heroi1.atacar();

