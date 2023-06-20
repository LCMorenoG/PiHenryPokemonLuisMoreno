const {pokemon} = require("../db.js")
const {type} = require("../db.js")

const postPokemonCreate = async(req, res) =>{

try {    
    let {name, image, vida, ataque, defensa, velocidad, altura, peso, types} = req.body;
    
    let minusName = name.toLowerCase()
 
    let newPokemon = await pokemon.findOrCreate({where:{              
        name: minusName,
        image,
        vida,
        ataque,
        defensa,
        velocidad,
        altura,
        peso
    }});
    
    let findTypes = await type.findAll({where:{name: types}});
    
    await newPokemon[0].setTypes(findTypes)
    if (newPokemon[1]===false){return res.status(400).send("Ya existe este Pokemon")}    
    res.status(201).json(newPokemon[0])
    console.log(types);
    console.log(findTypes);
} catch (error) {res.status(500).json(error.message)}
}

module.exports = postPokemonCreate