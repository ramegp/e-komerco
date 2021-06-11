import React from 'react'
import './About.css'
import Poke from '../../components/FetchPokemon/FetchPokemon'
function About() {
    return (
        <div className="container-about" id="about">
            <Poke />
        </div>
    )
}

export default About