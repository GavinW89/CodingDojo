import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useHistory, Link } from 'react-router-dom';
import PirateForm from '../components/PirateForm';

export default props =>{
    const history = useHistory();
    const [error, setError] = useState({});
    // const [loaded, setLoaded] = useState(false)

    const createPirate = (form) =>{
        axios.post('http://localhost:8000/api/pirates', form)
            .then(res=>{
                console.log(res)
                console.log(form)
                history.push('/')
            })
            .catch(err => {
                setError(err.response.data.error.errors)
                console.log(err.response)
                console.log(form)
            })
    }

    return(
        <div>
            <h1>Creat a Pirate!</h1>
            <Link to="/"><button>Home</button></Link>
            <PirateForm onSubmitProp={createPirate} initialName='' initalURL='' initialNumChests='' initialCatchPhrase='' initialPosition='' initialPegLeg={false} initialEyePatch={false} initialHookHand={false} error={error}/>
        </div>
    )
}