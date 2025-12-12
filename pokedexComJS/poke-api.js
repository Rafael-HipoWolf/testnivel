


const pokeApi = {}

function convertPokeApiDetailToPokemon(pokeDetail){
    const pokemon = new Pokemon();
    
    pokemon.number = pokeDetail.id;
    pokemon.name = pokeDetail.name;

    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name);
        
    const [type] = types;
    pokemon.types = types;
    pokemon.type = type;

    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default;

    return pokeApi.getPokemonDescription(pokemon.number)
        .then(description => {
            pokemon.description = description;
            return pokemon;
        });
}


pokeApi.getPokemonsDetail = (pokemon) => {
    return fetch(pokemon.url)
        .then((response) => response.json())
        .then(convertPokeApiDetailToPokemon)
}

pokeApi.getPokemons = (offset = 0, limit = 5) => {

    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

    return fetch(url)
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.results)
        .then((pokemons)=> pokemons.map(pokeApi.getPokemonsDetail))
        .then((detailRequests) => Promise.all(detailRequests))
        .then((PokemonsDetails) => PokemonsDetails)
}
pokeApi.getPokemonDescription = (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon-species/${id}/`;
    return fetch(url)
        .then(response => response.json())
        .then(species => {
            const entry = species.flavor_text_entries
                .find(text => text.language.name === "en");

            if (!entry) return "Description not available.";

            let description = entry.flavor_text.replace(/[\f\n\r]/g, " ");
            description = description.replace(/"/g, '&quot;');
            return description;
        });
};
