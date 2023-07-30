import { useEffect, useState } from 'react'
import '../styles/Card.css'
function Card(props) {
    const [pokemonData, setPokemonData] = useState([])
    
    useEffect(() => {
        const fetchPokemonData = async () => {
            try {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${props.num}/`);
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setPokemonData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchPokemonData();
    }, [props.num]);

    return (
        <>
            {pokemonData ? (
                <div className="card" onClick={()=>props.handleClick(props.num)}>
                    <span className="basic">BASIC</span>
                    <div className="h1">
                    <h1>{pokemonData.name}</h1>
                    </div>
                    <div className="img">
                    <img src={pokemonData.sprites &&
                              pokemonData.sprites.other &&
                              pokemonData.sprites.other['official-artwork'] &&
                              pokemonData.sprites.other['official-artwork'].front_default} 
                              alt={pokemonData.name} />
                    </div>
                    <h3>Abilities:</h3>
                    {pokemonData && pokemonData.abilities && (
                        <ul>
                            {pokemonData.abilities.map((abilityData) => (
                                <li key={abilityData.ability.name}>{abilityData.ability.name}</li>
                            ))}
                        </ul>
                    )}
                    
                </div>
                )
               
                :
                (<div>Loading...</div>)
            }
        </>
    )
}

export default Card
