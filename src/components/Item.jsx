import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom';

const Item = () => {
    const userName = useSelector(state => state.userName)
    const {id} = useParams();
    const [pokemon, setPokemon] = useState({})
    const navigate = useNavigate();
    
    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
            .then(res => setPokemon(res.data))
    }, [])

    return (
        <div className='card1'>
             <h1>pokedex {pokemon.id}</h1>
             {pokemon.name}  
            <img width={"350px"} src={pokemon.sprites?.other.dream_world.front_default} alt="" />
            <button onClick={() => navigate(-1)}>Go Back</button>
        </div>
    );
};

export default Item;