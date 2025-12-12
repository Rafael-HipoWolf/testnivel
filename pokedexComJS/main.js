const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')

const maxRegistro = 151
const limit = 12
let offset = 0

// essa função é responsavel por criar os itens de pokemon na tela
function loadpokemoItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
const newHtml = pokemons.map((pokemon) => `
    <li class="pokemon ${pokemon.type}">
        <span class="number">#${pokemon.number}</span>
        <span class="name">${pokemon.name}</span>

        <div class="detail">
            <ol class="types">
                ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
            </ol>
<div class="tooltip">
  <img src="${pokemon.photo}" alt="${pokemon.name}">
  <span class="tooltiptext">${pokemon.description}</span>
</div>
        </div>
    </li>
`).join('')

        pokemonList.innerHTML += newHtml
    })
}

loadpokemoItens(offset, limit)

// esse codigo é o responsavel por carregar mais pokemons
loadMoreButton.addEventListener('click', () => {
    offset += limit
// esse codigo verifica se ja chegou no maximo de registros permitidos e some o botão de carregar mais
    if(offset + limit >= maxRegistro) {
        const novoLimite = maxRegistro - offset
        loadpokemoItens(offset, novoLimite)

        loadMoreButton.parentElement.removeChild(loadMoreButton)
    } else {
        loadpokemoItens(offset, limit)
    }
})