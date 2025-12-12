/*class formaDeBolo {
    constructor(saborDaMassa, saborRecheio){
        this.saborDaMassa = saborDaMassa
        this.saborRecheio = saborRecheio
    }
    escrever(){
        console.log(`um delicioso bolo de ${this.saborDaMassa} com recheio de ${this.saborRecheio}`)
    }
    assar(){
        console.log("bolo assando de " + this.saborDaMassa)
    }
}
let boloFesta = new formaDeBolo ("chocolate", "nutella")
let boloPremium = new formaDeBolo ("baunilha", "coco")

boloFesta.saborDaMassa ="floraste negra"

boloFesta.escrever()
boloPremium.escrever()
boloPremium.assar()
*/

const entradas = [2000, 250]
let i = 0

function gets(){
    const valor = entradas[i]
    i++
    return valor
}

function print(texto){
    console.log(texto)
}
module.exports = {gets, print}
