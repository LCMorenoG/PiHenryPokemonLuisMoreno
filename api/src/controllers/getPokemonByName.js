const pokemonByName = require("../utils/pokemonByName.js")

const getPokemonByName = async (req, res, next) => {    
    let { name } = req.query
    if (name) {
// Pasa a minuscula el name recibido por query


        let minusName = name.toLowerCase();

        try {
            let resultado = await pokemonByName(minusName)
            res.status(200).json(resultado)
        }
        catch (error) {
            res.status(500).json({ error: "No hay un Pokemon por ese nombre" })
        }
        // si no recibe name por query, usa el parametro next() para continuar a la siguiente ruta (getAllPokemons)
    } else {
        next();
    }
}

module.exports = getPokemonByName;