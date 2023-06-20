import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";
import styles from "./FormModule.css"

const CreatePokemonForm = () => {

    const [createPokemonData, setCreatePokemonData] = useState({
        name: "",
        image: "",
        vida: "",
        ataque: "",
        defensa: "",
        velocidad: "",
        altura: "",
        peso: "",
    });

    const [typeArray, setTypeArray] = useState([]);    

    const [errores, setErrores] = useState({
        name: "",
        image: "",
        vida: "",
        ataque: "",
        defensa: "",
        velocidad: "",
        altura: "",
        peso: "",
        types: "",
    })

    const dataParser = {
        ...createPokemonData,
        vida: parseInt(createPokemonData.vida),
        ataque: parseInt(createPokemonData.ataque),
        defensa: parseInt(createPokemonData.defensa),
        velocidad: parseInt(createPokemonData.velocidad),
        altura: parseInt(createPokemonData.altura),
        peso: parseInt(createPokemonData.peso),
    }

    const handleErrors = () => {
        let correcto = true;
        const errors = {};

        if (createPokemonData.name.trim() === "") {
            errors.name = "El nombre del pokemon es obligatorio";
            correcto = false;
        }

        if (createPokemonData.image.trim() === "") {
            errors.image = "La imagen del pokemon es obligatoria";
            correcto = false;
        }

        if (createPokemonData.vida.trim() === "") {
            errors.vida = "La vida del pokemon es obligatoria";
            correcto = false;
        }

        if (createPokemonData.ataque.trim() === "") {
            errors.ataque = "El ataque del pokemon es obligatorio";
            correcto = false;
        }

        if (createPokemonData.defensa.trim() === "") {
            errors.defensa = "La defensa del pokemon es obligatoria";
            correcto = false;
        }

        if (createPokemonData.vida.trim() === "") {
            errors.vida = "La vida del pokemon es obligatoria";
            correcto = false;
        }
        
        if (!Number.isInteger(dataParser.ataque) || dataParser.ataque < 1 || dataParser.ataque > 300) {
            errors.ataque = "El ataque debe ser un numero entero entre 1 y 300";
            correcto = false;
        }
        
        if (!Number.isInteger(dataParser.defensa) || dataParser.defensa < 1 || dataParser.defensa > 300) {
            errors.defensa = "La defensa debe ser un numero entero entre 1 y 300";
            correcto = false;
        }
        
        if (!Number.isInteger(dataParser.velocidad) || dataParser.velocidad < 1 || dataParser.velocidad > 300) {
            errors.velocidad = "La velocidad debe ser un numero entero entre 1 y 300";
            correcto = false;
        }
        
        if (!Number.isInteger(dataParser.vida) || dataParser.vida < 1 || dataParser.vida > 500) {
            errors.vida = "La vida debe ser un numero entero entre 1 y 500";
            correcto = false;
        }
        
        if (!Number.isInteger(dataParser.altura) || dataParser.altura < 1 || dataParser.altura > 500) {
            errors.altura = "La vida debe ser un numero entero entre 1 y 500";
            correcto = false;
        }
        
        if (!Number.isInteger(dataParser.peso) || dataParser.peso < 1 || dataParser.peso > 500) {
            errors.peso = "La vida debe ser un numero entero entre 1 y 500";
            correcto = false;
        }
        
        if (typesArray1.length == 0) {
            errors.types = "Debes seleccionar por lo menos un tipo";
            correcto = false;
        }

        if (typesArray1.length>=4){
            errors.types = "Puedes seleccionar máximo 3 tipos"
            correcto = false;
        }
        
        setErrores(errors);
        return correcto;
    }

    const handleChange = (event) => {
        event.preventDefault();
        setCreatePokemonData({
            ...createPokemonData,
            [event.target.name]: event.target.value
        })
    };


const [typesArray1, setTypesArray1] = useState([])

    const handleChangeTypeArray = (event) => {
        let value = event.target.value

        if (typesArray1.includes(value)) {
            setTypesArray1(typesArray1.filter((type) => type !== value));
        } else {
            setTypesArray1([...typesArray1, value])
        }
    }

    
    const handleSubmit = async (event) => {
        event.preventDefault();


        if (handleErrors()) {
            try {
                let response = await axios.post("http://localhost:3003/pokemons", {
                    name: dataParser.name,
                    image: dataParser.image,
                    vida: dataParser.vida,
                    ataque: dataParser.ataque,
                    defensa: dataParser.defensa,
                    velocidad: dataParser.velocidad,
                    altura: dataParser.altura,
                    peso: dataParser.peso,
                    types: typesArray1,
                });
                console.log(response.data);
                return window.alert("Pokemon creado exitosamente")
            } catch (error) {
                window.alert("Error al crear Pokemon")
            }
        }
    };

    const getTypes = async () => {

        try {
            let typeResponse = await axios("http://localhost:3003/types")
            console.log(typeResponse.data);
            setTypeArray(typeResponse.data)
        } catch (error) {
            console.log("Error al recuperar los tipos");
        }
    }

    useEffect(() => {
        handleErrors();
    }, [createPokemonData, typesArray1]
    ); 

    useEffect(() => {
        getTypes();
    }, []
    );


    return (

        <div className="create-pokemon-form-container">
            <form>
                <label>Nombre:
                    <input onChange={handleChange} value={createPokemonData.name} type="text" name="name" />
                    {errores.name && <span>{errores.name}</span>}
                </label>

                <label>Imagen:
                    <input onChange={handleChange} value={createPokemonData.image} type="text" name="image" />
                    {errores.image && <span>{errores.image}</span>}
                </label>

                <label>Vida:
                    <input onChange={handleChange} value={createPokemonData.vida} type="number" name="vida" />
                    {errores.vida && <span>{errores.vida}</span>}
                </label>

                <label>Ataque:
                    <input onChange={handleChange} value={createPokemonData.ataque} type="number" name="ataque" />
                    {errores.ataque && <span>{errores.ataque}</span>}
                </label>

                <label>Defensa:
                    <input onChange={handleChange} value={createPokemonData.defensa} type="number" name="defensa" />
                    {errores.defensa && <span>{errores.defensa}</span>}
                </label>

                <label>Velocidad:
                    <input onChange={handleChange} value={createPokemonData.velocidad} type="number" name="velocidad" />
                    {errores.velocidad && <span>{errores.velocidad}</span>}
                </label>

                <label>Altura:
                    <input onChange={handleChange} value={createPokemonData.altura} type="number" name="altura" />
                    {errores.altura && <span>{errores.altura}</span>}
                </label>
                
                <label>Peso:
                    <input onChange={handleChange} value={createPokemonData.peso} type="number" name="peso" />
                    {errores.peso && <span>{errores.peso}</span>}
                </label>
                
                <h3>Tipos:</h3>
                    {errores.types && <span>{errores.types}</span>}
                <div className="types-container">
                    {typeArray.map((type) => (
                        <div key={type}>
                            <label>
                                <span>{type}:</span>
                                <input onChange={handleChangeTypeArray}
                                    type="checkbox"
                                    name={type}
                                    value={type} />                                    
                            </label>
                        </div>
                    ))}
                </div>


            </form>
                <button onClick={handleSubmit} type="submit">Crear Pokemon</button>
        </div>
    )
};

export default CreatePokemonForm;