const { Router } = require('express');
const getAllPokemon = require("../controllers/getAllPokemon.js")
const getPokemonById = require("../controllers/getPokemonById.js")
const getPokemonByName = require("../controllers/getPokemonByName.js")
const postPokemonCreate = require("../controllers/postPokemonCreate.js")
const getAllTypes = require("../controllers/getAllTypes.js")

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/pokemons/:id", getPokemonById)

router.get("/pokemons", getPokemonByName)

router.get("/pokemons", getAllPokemon)

router.options("/pokemons", (req, res) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.sendStatus(200);
  });

router.post("/pokemons", postPokemonCreate)

router.get("/types", getAllTypes)

// Handle requests to unknown routes
router.all('*', (req, res) => {
    res.status(404).send(`Unknown route: ${req.method} ${req.originalUrl}`);
});

module.exports = router;
