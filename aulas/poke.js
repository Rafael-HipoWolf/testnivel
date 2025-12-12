// abaixo segue exmplo sem o JSON
let nome = "Rafael"
let idade = 27
let produtos = ["mouse", "teclado", "monitor" ]
let valorPodutos = [29.90, 129.90, 899.90]

generate (nome, produtos , valorPodutos, idade)

function generate (nome, produtos, valorPodutos, idade){
    console.log(`o comprador é ${nome}`)
    console.log(`a idade é ${idade}`)
    console.log("--------------")
    console.log(`o produto é ${produtos[0]}`)
    console.log(`o valor é ${valorPodutos[0]}`)
}//ex de função sem usar o JSON. demostra como é mais dificil transferir dados de um lugar para outro

let invoice = {
    nomes: "Rafael" ,//precisa ser :(2 pontos) e precisa no final colocar a , (virgula) 
    idades: 27,
    produto: {
        0:["mouse" , 29.90],
        1:["teclado" , 129.90],
        2:["MONITOR" , 899.90],
        3: ["TV 100 polegadas", "10000.90"]
    //pode sempre adicionar uma nova linha sem ter que alterar todo o codigo
    }
}
//aqui ja vai ser umanova linha de codigo para chamar oque ta acima, os nomes do parametro pode ser outro
geracaoInvoice(invoice)
function geracaoInvoice (invoice){ //(parametro) ele vai chamar as linhas de cima e atualizar o resultado que vai aparecer no console.log
 console.log(`o comprador é ${invoice.nomes}`)
    console.log(`a idade é ${invoice.idades}`)
    console.log("--------------")

    for (let indice in invoice.produto){ // for in percorrer todos os intens que tiver na lista
        let [nomeProduto, precoProduto] = invoice.produto[indice]
        console.log(`- ${nomeProduto} : R$ ${precoProduto}`)
    }
}