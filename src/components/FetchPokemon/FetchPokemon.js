import React, { useEffect, useState } from 'react'

function FetchPokemon() {

    const [data, setData] = useState(null)

    useEffect(() => {
       fetch("https://pokeapi.co/api/v2/pokemon?limit=20&offset=0").then((res)=>res.json()).then((res)=>{setData(res.results)})
    }, [])

    return (
        <div className="mt-5 pt-5">

            {console.log(data)}

            {data !== null ? (<ul>
                {data.map((pokemon,index)=>{
                    return (
                    <>
                        <li key={index} id={index}>{pokemon.name}</li>
                    </>)
                })}
            </ul>) :(<h2>Cargando...</h2>)}
            
        </div>
    )
}

export default FetchPokemon
