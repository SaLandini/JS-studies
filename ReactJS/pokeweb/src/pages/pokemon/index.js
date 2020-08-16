import React, { Component } from 'react';
import api from '../../services/api';
import './style.css';

export default class Pokemon extends Component {
    state = {
        pokemon : {},
    };

    async componentDidMount() {
        const { name } = this.props.match.params;
        const response = await api.get(`/pokemon/${name}`);
        console.log(response.data);
        this.setState({pokemon : response.data});
    };

    render(){
        const { pokemon } = this.state;
        
        return(
            <div className="pokemon-info">
                <h1>{ pokemon.name }</h1>
                <p>{ pokemon.id }º posição na pokedex</p>
            </div>
        );    
    };
}