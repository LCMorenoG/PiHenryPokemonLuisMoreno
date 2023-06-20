const { pokemon } = require("../db.js");
const axios = require('axios');

const URL = "https://pokeapi.co/api/v2/pokemon/";

const getPokemonById = async (req, res) => {
    try {
        let { id } = req.params;        

        if (id.includes("-")) {            
            let findPokemonById = await pokemon.findOne({ where: { id: id } });
            let typesDB = await findPokemonById.getTypes();
            let types = typesDB.map(type=>type.name);            
            findPokemonById.dataValues.types = types
            res.status(200).json(findPokemonById);
            console.log(findPokemonById);
        }
        else {
            let response = await axios.get(`${URL}${id}`);
            let types = response.data.types.map(type => type.type.name)
            let { name, sprites, stats, height, weight } = response.data

            let apiPokemon = {
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
            
            res.status(200).json(apiPokemon);
        }

    } catch (error) {
        res.status(500).send(error.message);
    }
}
module.exports = getPokemonById;