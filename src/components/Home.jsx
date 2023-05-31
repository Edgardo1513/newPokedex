import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getUsername } from '../store/slices/userName.slice';



const Home = () => {
    const [name, setName] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const goPokedex = () => {
        dispatch(getUsername(name));
        navigate("/pokedex")
    }

    return (
        <div className='card1'>
            <h1>Home</h1>
            <input type="text" value={name} placeholder='Enter the name of Pokemon' onChange={e => setName(e.target.value)} />
            <button onClick={()=> goPokedex()}>Go</button>
        </div>
    );
};

export default Home;