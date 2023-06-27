import React from "react";
import axios from "axios";
import { connect } from "react-redux"
import { useDispatch } from "react-redux"
import { deletePokemon } from "../Redux/action";
import style from "./DeletePokemonModule.css"


const DeleteButton = ({ name }) => {
    const dispatch = useDispatch()
    console.log(name);
    const handleDelete = async () => {
        try {
            const response = await axios.delete(`http://localhost:3003/pokemons/${name}`);
            window.alert("Pokemon eliminado"); 
            dispatch(deletePokemon(name))
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <button className="deleteButton" onClick={handleDelete}>
            X
        </button>
    );
};

const mapStateToProps = (state) => {
    return {
        allPokemons: state.allPokemons,
        pokemonsFiltered: state.pokemonsFiltered
    }
}


export default connect(mapStateToProps, null)(DeleteButton);