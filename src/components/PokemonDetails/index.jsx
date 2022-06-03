import {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {getPokemon} from "../../services/api"; 
import {LoadingSpinner} from "./../LoadingSpinner";

import "./style.scss";

export function PokemonDetails() {
    let {pokemonId} = useParams();
    const [pokemonData, setPokemonData] = useState("");
    const [loading, setLoading] = useState(true);
    const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;

    useEffect(() => {
        async function fetchData() {
            let result  = await getPokemon(pokemonUrl);
            setPokemonData(result)
            setLoading(false);
        }
        fetchData();
    }, [])

    return (
        <div className="pokemon-details-container">
            
            {loading ? <LoadingSpinner /> : (
            <div className="pokemon-details">
                <div className="pokemon-info-section">
                    <span>NAME: {pokemonData.name}</span>
                    <span>ID: #{("00" + pokemonData.id).slice(-3)}</span>
                    <span>HEIGHT: {pokemonData.height}</span>
                    <span>WEIGHT: {pokemonData.weight}</span>
                    <div className="pokemon-abilities">
                        <span>ABILITIES:</span>
                        <div className="ability-info-container">
                            {pokemonData.abilities.map(ability => (
                                <div key={ability} className={`ability-info ${pokemonData.types[0].type.name}`} >{ability.ability.name}</div>
                            ))}
                        </div>
                    </div>
                    <div className="pokemon-types">
                        <span>TYPES:</span>
                        {pokemonData.types.map(type => (
                                <div key={type} className={`type-info ${type.type.name}`} >{type.type.name}</div>
                            ))}
                    </div>
                </div>
                <div className="pokemon-image-section">
                    <img src={pokemonData.sprites.other.dream_world.front_default} alt={`${pokemonData.name} pokemon`} />
                </div>
                <div className="pokemon-stats-section">
                    {pokemonData.stats.map(stat => (
                            <div key={stat} className="stat-info">
                                <span>{stat.stat.name}: </span>
                                <div className="progress-bar">
                                    <span>{`${stat.base_stat} / 100`}</span>
                                    <progress value={stat.base_stat / 100 } />
                                </div>
                            </div>
                        ))}
                </div>
            </div>
                )}
            
        </div>
    );
}
