import React, { useState, useEffect } from "react";
import {useParams} from 'react-router-dom';
import axios from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Planet = (props) => {
    const {option, id} = useParams();
    const [responseData, setResponseData] = useState({});
    const history = useHistory();
    useEffect(() => {
        axios.get(`https://swapi.dev/api/${option}/${id}`)
        .then(response=>{setResponseData(response.data)});
        
        })
        .catch(err=> {
            console.log(err);
            history.push('/error')
    },[{option},{id}])
    return(
        <div>
            <h1>{responseData.name}</h1>
            <h3>Climate: {responseData.climate}</h3>
            {
                responseData.water === 1 ?
                <h3>Surface Water: True</h3>
                : <h3>Surface Water: False</h3>
            }
            <h3>Population: {responseData.population}</h3>
        </div>
    );
}

export default Planet;