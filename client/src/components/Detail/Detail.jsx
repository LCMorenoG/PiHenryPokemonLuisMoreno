import axios from "axios";
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./DetailModule.css"


const Detail = () => {

    const { id } = useParams();
    const [pokemon, setPokemon] = useState({});

    useEffect(() => {
        axios(`http://localhost:3003/pokemons/${id}`)
            .then(({ data }) => {
                if (data.name) {
                    setPokemon(data);
                } else {
                    window.alert('No hay pokemons con ese ID')
                }
            });
        console.log(pokemon.name);
        return setPokemon({});
    }, [id])

    return (

        <div className="detail-container">
            <div className="card-detail">
                <div className="img-container">
                    <img src={pokemon.image && pokemon.image} alt={pokemon.name} />
                </div>
                <div className="info-container">
                    <h1>Nombre: {pokemon.name && pokemon.name}</h1>
                </div>
                <div className="info-container">
                    <h2>Vida: {pokemon.vida && pokemon.vida}</h2>
                </div>
                <div className="info-container">
                    <h2>Ataque: {pokemon.ataque && pokemon.ataque}</h2>
                </div>
                <div className="info-container">
                    <h2>Defensa: {pokemon.defensa && pokemon.defensa}</h2>
                </div>
                <div className="info-container">
                    <h2>Velocidad: {pokemon.velocidad && pokemon.velocidad}"</h2>
                </div>
                <div className="info-container">
                    <h2>Altura: {pokemon.altura && pokemon.altura}</h2>
                </div>
                <div className="info-container">
                    <h2>Peso: {pokemon.peso && pokemon.peso}</h2>
                </div>
                <div className="info-container">
                    <h2>Tipo: {pokemon.types && pokemon.types.join(" - ")}</h2>
                </div>

            </div>
        </div>
    )
};

export default Detail;