import React from "react";
import { Link } from "react-router-dom";
import DeleteButton from "../DeletePokemon/DeletePokemon";
import style from "./CardModule.css"


const Card = ({ id, name, image, types }) => {
    
    return (

        <div className="card">
            {id.toString().includes("-") ? <DeleteButton name={name} /> : null}
                <Link to={`/detail/${id}`} className="card-link">
                <div className="img-container">
                    <img className="card-image" src={image} alt={name} />
                </div>
                <div className="info-container">
                    <h1 className="card-title">Name: {name}</h1>
                </div>
                <div className="info-container">
                    <h1 className="card-types">Types: {types.join(" - ")}</h1>
                </div>
        </Link>
            </div>
    )
}

export default Card;

