const pokemonList = document.getElementById('pokemonList')
const loadMore = document.getElementById('loadMoreButton')
const limit = 5
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

                    <img src="${pokemon.photo}" alt="${pokemon.name}">
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
    loadpokemoItens(offset, limit)
})