import React, {useState, useEffect} from "react";
import axios from "axios";
import { Link, useHistory, useParams } from "react-router-dom";
import ViewOnePirate from "../components/ViewOnePirate";

const OnePirate = (props) => {
    const {_id} = useParams();
    const history = useHistory();
    const [pirate, setPirate] = useState();
    const [loaded, setLoaded] = useState();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/${_id}`)
            .then(res=> {
                console.log(res)
                setPirate(res.data)
                console.log(pirate)
                setLoaded(true)
            })
            .catch(err=>{
                console.log(err)
            })
    },[_id])
    
    return (
        <div>
            <Link to='/'>Home</Link>
            <Link to={'/edit/'+_id}>Edit</Link>
            {
                loaded && <ViewOnePirate initialName={pirate.name} initialURL={pirate.url} initialNumChests={pirate.numChest} initialCatchPhrase={pirate.catchphrase} initialPosition={pirate.position} initialPegLeg={pirate.pegLeg} initialEyePatch={pirate.eyePatch} initialHookHand={pirate.hookHand}/>
            }
        </div>
    )
}

export default OnePirate;