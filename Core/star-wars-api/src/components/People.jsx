import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom';
import roger from '../roger.jpeg';


const People = props => {
    const [people, setPeopleData] = useState("");
    const { id } = useParams();
    const [error, setError] = useState(null)



    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${id}`)
            .then(response => {
                setPeopleData(response.data)
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
                        <h1>{people.name}</h1>
                        <h3>Height: {people.height}cm</h3>
                        <h3>Weight: {people.mass}kg</h3>
                        <h3>Eye Color: {people.eye_color}</h3>
                    </div>
            }
        </div>
    )
}

export default People;