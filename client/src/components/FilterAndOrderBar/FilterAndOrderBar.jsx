import { useDispatch } from "react-redux"
import { filterCardsOrigin, filterCardsType, orderCardsAlphab, orderCardsAtack } from "../Redux/action"
import { connect } from "react-redux"
import style from "./FilterAndOrderModule.css"

const FilterAndOrderBar = () => {

    const dispatch = useDispatch()

    const handleAlphaOrder = (event) => {
        dispatch(orderCardsAlphab(event.target.value))
    }

    const handleAtackOrder = (event) => {
        dispatch(orderCardsAtack(event.target.value))
    }

    const handleOriginFilter = (event) => {
        dispatch(filterCardsOrigin(event.target.value))
    }

    const handleTypeFilter = (event) => {
        dispatch(filterCardsType(event.target.value))
    }

    return (

        <div className="filter-order-container">

            <div>
                <h2>Order by Atack</h2>
                <select onChange={handleAtackOrder}>

                    <option value={"ORIGINAL"}>Original</option>
                    <option value={"ASCENDENTE"}>Higher Atack</option>
                    <option value={"DESCENDENTE"}>Lesser Atack</option>

                </select>
            </div>
            
            <div>
                <h2>Order by Alphabet</h2>
                <select onChange={handleAlphaOrder}>
                    <option value={"ORIGINAL"}>Original</option>
                    <option value={"A-Z"}>Ascendente</option>
                    <option value={"Z-A"}>Descendente</option>
                </select>
            </div>

            <div>
                <h2>Filter by Origin</h2>
                <select onChange={handleOriginFilter}>

                    <option value={"all"}>All</option>
                    <option value={"API"}>From API</option>
                    <option value={"DB"}>From DB</option>

                </select>
            </div>

            <div>
                <h2>Filter by Type</h2>
                <select multiple onChange={handleTypeFilter}>

                    <option value="all">All</option>
                    <option value="normal">Normal</option>
                    <option value="fighting">Fighting</option>
                    <option value="flying">Flying</option>
                    <option value="poison">Poison</option>
                    <option value="ground">Ground</option>
                    <option value="rock">Rock</option>
                    <option value="bug">Bug</option>
                    <option value="ghost">Ghost</option>
                    <option value="steel">Steel</option>
                    <option value="fire">Fire</option>
                    <option value="water">Water</option>
                    <option value="grass">Grass</option>
                    <option value="electric">Electric</option>
                    <option value="psychic">Psychic</option>
                    <option value="ice">Ice</option>
                    <option value="dragon">Dragon</option>
                    <option value="dark">Dark</option>
                    <option value="fairy">Fairy</option>
                    <option value="unknown">Unknown</option>
                    <option value="shadow">Shadow</option>

                </select>
            </div>

        </div>

    )
}

const mapStateToProps = (state) => {
    return {
        allPokemons: state.allPokemons,
        pokemonsFiltered: state.pokemonsFiltered
    }
}

export default connect(mapStateToProps, null)(FilterAndOrderBar)