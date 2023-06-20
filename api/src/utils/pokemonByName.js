const { pokemon } = require("../db.js")
const axios = require('axios');
const URL = "https://pokeapi.co/api/v2/pokemon/"

// Inicializa la cache como un objeto vacio
let pokemonNameCache = {};

let pokemonByName = async (name) => {

    // primero con sulta si el pokemon consultado ya se encuentra en la cache, para devolverlo desde la cache
    if (pokemonNameCache[name]) {        
        return pokemonNameCache[name];
    } else {
        try {
            // hace la consulta por nombre a la base de datos, y si lo encuentra retorna desde alli
            let findPokemonByName = await pokemon.findOne({ where: { name: name }, });

            if (findPokemonByName) {
                let typesDB = await findPokemonByName.getTypes();
                let types = typesDB.map(type => type.dataValues.name);                
                
                //si hay consulta nueva, guardar en la cache, lo gaurdamos como una key:value donde key es el name y value la consulta a la DB
                findPokemonByName =  {...findPokemonByName.dataValues, types: types};
                
                pokemonNameCache[name] = findPokemonByName
                return findPokemonByName
                //si no esta en la base de datos, consulta en la api
            } else {
                let response = await axios.get(`${URL}${name}`)
                let types = response.data.types.map(type => type.type.name)
                let { id, sprites, stats, height, weight } = response.data
                let apiPokemonName = {
                    id,
                    name,
                    image: sprites.other["official-artwork"].front_default,
                    vida: stats[0].base_stat,
                    ataque: stats[1].base_stat,
                    defensa: stats[2].base_stat,
                    velocidad: stats[5].base_stat,
                    altura: height,
                    peso: weight,
                    types
                }
                // si hay consulta nueva, guardar en la cache, lo gaurdamos como una key:value donde key es el name y value la response de la api

                pokemonNameCache[name] = apiPokemonName
                console.log(apiPokemonName);
                return apiPokemonName;
            };
        } catch (error) {
            throw new Error("Error al obtener los detalles del Pokémon");
        }
    }

}

module.exports = pokemonByName;

/*  {include: {
    model: type,
    attributes: ["name"],
    through: {
      attributes: []
    }}}



    const formattedPokemons = dbPokemonsFound.map(pokemon => ({
                ...pokemon.toJSON(),
                types: pokemon.types.map(type => type.name)
              }));*/