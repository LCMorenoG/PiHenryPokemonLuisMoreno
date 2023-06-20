const { type } = require("../db.js")
const axios = require("axios")
const URL = "https://pokeapi.co/api/v2/type"


const getAllTypes = async (req, res) => {

    try {
        let findAllTypes = await type.findAll();
        if (!findAllTypes.length) {
            let arrayTypes = [];
            let response = await axios.get(URL)
            
            for (let i= 0; i < response.data.results.length; i++) {
                arrayTypes.push(response.data.results[i].name)                
            }
            console.log(arrayTypes); 
            for (let i = 0; i < arrayTypes.length; i++) {
                await type.create({name:arrayTypes[i]});                               
            }
            findAllTypes = await type.findAll();        
            res.status(200).json(findAllTypes)
        } 
        else {
            let arrayAllTypesPromises = findAllTypes.map((type) => type.name);
            let arrayAllTypes = await Promise.all(arrayAllTypesPromises);

            res.status(200).json(arrayAllTypes)
        }
    }
    catch (error) {
        res.status(500).json({ error: "No hay datos de los Pokemon"})
    }
}

module.exports = getAllTypes;