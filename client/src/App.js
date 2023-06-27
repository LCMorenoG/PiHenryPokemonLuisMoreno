import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import LandingPage from './components/LandingPage/LandingPage';
import Detail from './components/Detail/Detail';
import CreatePokemonForm from './components/Form/Form';
import NavBar from './components/NavBar/NavBar';
import axios from 'axios';
import { useDispatch } from "react-redux";
import { setCards, setTypes } from './components/Redux/action';
import FilterAndOrderBar from './components/FilterAndOrderBar/FilterAndOrderBar';
import Home from './components/Home/Home';



function App() {
   const location = useLocation();

   const dispatch = useDispatch();


   useEffect(() => {
      const fetchPokemons = async () => {
         try {
            const typeResponse = await axios.get('http://localhost:3003/types');
            const types = typeResponse.data;
            const response = await axios.get('http://localhost:3003/pokemons');
            const pokemons = response.data;
            dispatch(setCards(pokemons));
            dispatch(setTypes(types));
            console.log(types);
            console.log(pokemons);
         } catch (error) {
            window.alert('No es posible recuperar los Pokemon');
         }
      };

      fetchPokemons();
   }, []);


   return (
      <div className='main-container'>
         {(location.pathname !== "/") && <NavBar />}
         <div>
            <Routes>
               <Route path="/" element={<LandingPage />} />
               <Route path="/home" element={<div><FilterAndOrderBar /><Home /></div>} />
               <Route path="/detail/:id" element={<Detail />} />
               <Route path="/form" element={<CreatePokemonForm />} />
            </Routes>
         </div>
      </div>
   );
}

export default App;
