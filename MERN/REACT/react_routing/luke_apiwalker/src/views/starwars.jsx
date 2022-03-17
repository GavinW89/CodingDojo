import React, { useState, useEffect } from "react";
import {useParams, useHistory, Route, Switch, Link} from 'react-router-dom';
import axios from "axios";

const Starwars = (props) => {
    const {option, id} = useParams();
    const [responseData, setResponseData] = useState({});

    const history = useHistory();

    useEffect(() => {
        console.log(`OPTION ----- ${option}`)

        axios.get(`https://swapi.dev/api/${option}/${id}`)
        .then(res=> {
            setResponseData(res.data)
            console.log(`Response Data ===============`);
            console.log(responseData)
        })
        .catch(err => {
            console.log(err);
            history.push(`/error`)
        })
    },[option,id])

    return (
        <div>
            {
                option === "people"
                ? <div>
                    <h1>{responseData.name}</h1>
                    <h3>Gender: {responseData.gender}</h3>
                    <h3>Birth Year: {responseData.birth_year}</h3>
                    <h3>Height: {responseData.height}</h3>
                    <h3>Mass: {responseData.mass} kg</h3>
                    <h3>Hair Color: {responseData.hair_color}</h3>
                    <h3>Skin Color: {responseData.skin_color}</h3>
                </div>
                : <div>
                    <h1>{responseData.name}</h1>
                    <h3>Climate: {responseData.climate}</h3>
                    {
                        responseData.water === 1 
                            ?<h3>Surface Water: True</h3>
                            :<h3>Surface Water: False</h3>
                    }
                    
                    <h3>Population: {responseData.population}</h3>
                    
                </div>
            }
        </div>
    )
}

export default Starwars;