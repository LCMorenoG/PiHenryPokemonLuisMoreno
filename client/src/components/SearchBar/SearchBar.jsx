import { useState } from 'react';
import style from "./SearchBarModule.css"


const SearchBar = ({ onSearch }) => {

    const [name, setName] = useState('');

    const handleChange = (event) => {
        setName(event.target.value)
    };

    return (
        <div className='searchbar-container'>
           
                <input type='search' onChange={handleChange} value={name} />
                <button onClick={() => { onSearch(name) }}>Agregar</button>
                <button onClick={() => window.location.reload()}>Restaurar</button>
            
        </div>
    )
};

export default SearchBar;