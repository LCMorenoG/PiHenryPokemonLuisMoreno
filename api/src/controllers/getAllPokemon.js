const { pokemon } = require("../db.js")
const axios = require("axios")
const URL = "https://pokeapi.co/api/v2/pokemon/"
const pokemonByName = require("../utils/pokemonByName.js")
const { raw } = require("body-parser")


// Trae 60 pokemons de la URL ()

const getAllPokemon = async (req, res) => {
    try {

        let arrayAllPokemon = [];
        let urlNext = URL;
        let pageCount = 0
        while (pageCount !== 60) {
            let response = await axios.get(urlNext)
            let { data } = response
            arrayAllPokemon = arrayAllPokemon.concat(data.results);
            urlNext = data.next;
            pageCount += 20
        }
        const findAllPokemon = await pokemon.findAll({ attributes: ['name'], raw: true });

        if (findAllPokemon.length) {           
            arrayAllPokemon = arrayAllPokemon.concat(findAllPokemon);         
          }

        let detailAllPokemonPromises = arrayAllPokemon.map((pokemon) => pokemonByName(pokemon.name));
        let detailAllPokemon = await Promise.all(detailAllPokemonPromises);

        return res.status(200).json(detailAllPokemon);

    }
    catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = getAllPokemon;