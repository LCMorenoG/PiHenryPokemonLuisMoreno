const pokemonByName = require("../utils/pokemonByName.js")

const getPokemonByName = async (req, res, next) => {
    let { name } = req.query
    if (name) {

        let minusName = name.toLowerCase();

        try {
            let resultado = await pokemonByName(minusName)
            res.status(200).json(resultado)
        }
        catch (error) {
            res.status(500).json({ error: "No hay un Pokemon por ese nombre" })
        }

    } else {
        next();
    }
}

module.exports = getPokemonByName;