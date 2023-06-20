import React from "react";
import Paging from "../Paging/Paging";
import Cards from "../Cards/Cards";
import SearchBar from "../SearchBar/SearchBar";
import { useSelector } from "react-redux";
import { useState } from "react";
import style from "./HomeModule.css"
import axios from "axios";
import { useDispatch } from "react-redux";


const Home = () => {

    const dispatch = useDispatch();

    let activeList = useSelector(state => state.allPokemons);
    let pokemonsFiltered = useSelector(state => state.pokemonsFiltered);
    console.log(pokemonsFiltered);
    (pokemonsFiltered.length > 0 ) && (activeList = pokemonsFiltered);

    const [currentPage, setCurrentPage] = useState(1);
    const [pokemonPerPage, setPokemonPerPage] = useState(12);
    const finalPageIndicator = currentPage * pokemonPerPage;
    const initialPageIndicator = finalPageIndicator - pokemonPerPage;
    const currentPokemons = activeList.slice(initialPageIndicator, finalPageIndicator);


    const onSearch = async (name) => {
        try {
           const response = await axios(`http://localhost:3003/pokemons?name=${name}`)
           const pokemons = response.data;
  
           if (pokemons.name) {
              dispatch({ type: 'SET_POKEMONS', payload: [pokemons] });
                setCurrentPage(1);
            } else {
              throw Error();
           }
        } catch (error) {
           window.alert('No hay Pokemons con ese nombre')
        }
     }

    const paging = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    console.log(paging);

    return (
        <div className="home-container">

            <SearchBar
                onSearch={onSearch}
            />

            <Paging
                pokemonPerPage={pokemonPerPage}
                activeList={activeList.length}
                paging={paging}
                currentPage={currentPage}
            />

            <Cards
                currentPokemons={currentPokemons}
            />


        </div>

    )

}

export default Home;