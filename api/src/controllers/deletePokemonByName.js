const { pokemon } = require("../db.js");


const deletePokemonByName = async (req, res) => {
    
    try {
        let { name } = req.params;
        console.log(name);
        const deletePokemon = await pokemon.destroy({where:{name: name}})
        
        if(deletePokemon === 0) {
            return res.status(404).json({error: "El pokemon no existe"});
        }

        res.status(200).json({message: "Se ha eliminado el pokemon de la base de datos"})
        
    } catch (error) {
        res.status(500).send(error.message);
    }
}

module.exports = deletePokemonByName