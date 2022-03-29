import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useHistory, useParams, Link } from 'react-router-dom';
import PirateForm from '../components/PirateForm';

export default props =>{
    const history = useHistory();
    const {_id} = useParams();
    const [pirate,setPirate] =  useState({})
    const [loaded, setLoaded] = useState(false)
    const [error, setError] = useState({})
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/${_id}`)
            .then(res=>{
                setPirate(res.data)
                console.log(pirate)
                console.log(res.data)
                setLoaded(true)
                console.log("LOADED" + loaded)
            })
            .catch(err =>{
                console.log(err.response)
                
            })
    },[_id])

    const editPirate = (form) =>{
        axios.patch(`http://localhost:8000/api/${_id}`, form)
            .then(res=>{
                console.log(res)
                history.push('/')
            })
            .catch(err => {
                console.log(err.response)
                setError(err.response.data.err.errors);
            })
    }

    return(
        <div>
            <Link to="/">Home</Link>
            {
                loaded && <PirateForm onSubmitProp={editPirate} initialName={pirate.name} initalURL={pirate.url} initialNumChests={pirate.numChest} initialCatchPhrase={pirate.catchphrase} initialPosition={pirate.position} initialPegLeg={pirate.pegLeg} initialEyePatch={pirate.eyePatch} initialHookHand={pirate.hookHand} error={error}/>
            }
        </div>
        
    )
}