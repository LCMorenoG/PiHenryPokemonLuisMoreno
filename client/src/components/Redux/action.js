
export const filterCardsType = (type)=>{
    return {type: "FILTER_TYPE", payload: type}
}

export const filterCardsOrigin = (origin)=>{
    return {type: "FILTER_ORIGIN", payload: origin}
}

export const orderCardsAlphab = (order)=>{
    return {type: "ORDER_ALPHA", payload: order}
}

export const orderCardsAtack = (order)=>{
    return {type: "ORDER_ATACK", payload: order}
}

export const setCards = (pokemons)=>{
    return {type: "SET_POKEMONS", payload: pokemons}
}

export const deletePokemon = (name)=>{
    return {type: "DELETE_POKEMON", payload: name}
}

export const setTypes = (types) =>{
    return {type: "SET_TYPES", payload: types}
}