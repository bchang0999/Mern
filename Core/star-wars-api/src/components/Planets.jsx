import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom';
import roger from '../roger.jpeg';

const Planets = props => {
    const [planet, setPlanetData] = useState("");
    const { id } = useParams();
    const [error, setError] = useState(null)



    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${id}`)
            .then(response => {
                setPlanetData(response.data)
                setError(null)
            }
            )
            .catch(err => setError("Er Um Roger Roger?"))
    }, [id])

    return (
        <div>
            {
                error ? <>
                    <h1>
                        Er Um Roger Roger?
                    </h1>
                    <img src={roger} />
                </> :

                    <div>
                        <h1>{planet.name}</h1>
                        <h3>Climate: {planet.climate}</h3>
                        <h3>Terrain: {planet.terrain}</h3>
                        <h3>Surface Water: "{planet.surface_water}"</h3>
                        <h3>Population: {planet.population}</h3>
                    </div>
            }
        </div >
    )


}

export default Planets;