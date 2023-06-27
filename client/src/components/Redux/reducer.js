const initialState = {
    allPokemons: [],
    pokemonsFiltered: [],
    pokemonTypes: []
}


const reducer = (state = initialState, action) => {
    switch (action.type) {

        case 'SET_TYPES':
            return {
                ...state,
                pokemonTypes: action.payload,
            }

        case 'SET_POKEMONS':
            return {
                ...state,
                allPokemons: action.payload,

            };

        case 'DELETE_POKEMON':
            let pokemonsFilterDelete = state.pokemonsFiltered.filter(
                (poke) => poke.name !== action.payload            
            );
            let allPokemonsDelete = state.allPokemons.filter(
                (poke) => poke.name !== action.payload
            );

            return {
                ...state,
                allPokemons: allPokemonsDelete,
                pokemonsFiltered: pokemonsFilterDelete
            };

        case 'FILTER_ORIGIN':
            let pokemonsFilterOrigin = [...state.pokemonsFiltered];

            if (pokemonsFilterOrigin.length === 0) {
                pokemonsFilterOrigin = [...state.allPokemons]
            }

            if (action.payload === "DB") {
                pokemonsFilterOrigin = pokemonsFilterOrigin.filter((poke) => poke.id.toString().includes("-"));
            }
            if (action.payload === "API") {
                pokemonsFilterOrigin = pokemonsFilterOrigin.filter((poke) => !poke.id.toString().includes("-"));

            }
            if (action.payload === "all") {
                pokemonsFilterOrigin = initialState.allPokemons;
            } else {
                if (pokemonsFilterOrigin.length === 0) {
                    window.alert("No hay coincidencias");
                }
            }

            return {
                ...state,
                pokemonsFiltered: pokemonsFilterOrigin
            };

        case 'FILTER_TYPE':
            let pokemonFilterType = [...state.pokemonsFiltered];

            if (pokemonFilterType.length > 0) {
                pokemonFilterType = pokemonFilterType.filter(
                    (poke) => poke.types.includes(action.payload));
            } else {
                pokemonFilterType = state.allPokemons.filter(
                    (poke) => poke.types.includes(action.payload));
            }

            if (action.payload === "all") {
                pokemonFilterType = initialState.allPokemons;
            } else {
                if (pokemonFilterType.length === 0) {
                    window.alert("No hay coincidencias");
                }
            }
            return {
                ...state,
                pokemonsFiltered: pokemonFilterType
            };

        case 'ORDER_ALPHA':
            let pokemonsFilteredCopy = [...state.pokemonsFiltered];
            let allPokemonCopy = [...state.allPokemons];
            let pokemonsSort;

            if (pokemonsFilteredCopy.length > 0) {
                pokemonsSort = pokemonsFilteredCopy.sort((a, b) => a.name.localeCompare(b.name));
            } else {
                pokemonsSort = allPokemonCopy.sort((a, b) => a.name.localeCompare(b.name));
            };

            if (action.payload === "Z-A") {
                pokemonsSort.reverse();
            } else if (action.payload === "ORIGINAL") {
                pokemonsSort = initialState.allPokemons
            }

            return {
                ...state,
                pokemonsFiltered: pokemonsSort
            }

        case 'ORDER_ATACK':
            let pokemonsFilteredCopyAtack = [...state.pokemonsFiltered];
            let allPokemonCopyAtack = [...state.allPokemons];
            let pokemonsSortAtack;

            if (pokemonsFilteredCopyAtack.length > 0) {
                pokemonsSortAtack = pokemonsFilteredCopyAtack.sort((a, b) => b.ataque - a.ataque);
            } else {
                pokemonsSortAtack = allPokemonCopyAtack.sort((a, b) => b.ataque - a.ataque);
            };

            if (action.payload === "DESCENDENTE") {
                pokemonsSortAtack.reverse();
            } else if (action.payload === "ORIGINAL") {
                pokemonsSortAtack = initialState.allPokemons
            }

            return {
                ...state,
                pokemonsFiltered: pokemonsSortAtack
            }


        default: return state
    }
}

export default reducer;