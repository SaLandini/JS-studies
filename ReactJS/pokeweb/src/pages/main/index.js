import React, { Component } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import './styles.css';

export default class Main extends Component {
    state = {
        pokemon: [],
        pokeInfo: {},
    };

    componentDidMount(){
        this.loadProducts();
    };

    loadProducts = async(next = "https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20") => {
        const response = await api.get('pokemon/');

        const { results, ...pokeInfo } = response.data
        
        this.setState({ pokemon: results, pokeInfo});
    };

    render() {
        const { pokemon } = this.state;

        return(
            <div className="pokemon-list">
                {pokemon.map(poke => (
                    <article key={poke.id}>
                        <strong>{poke.name}</strong>

                        <Link to={`/pokemon/${poke.name}`}>Acessar</Link>
                    </article>
                ))}
                <div className="actions">
                </div>
            </div>
        );
    };
}