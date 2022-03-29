import React, {  useState } from 'react'

export default props => {
    const { initialName, initialURL, initialNumChests, initialCatchPhrase, initialPosition, initialPegLeg, initialEyePatch, initialHookHand, onSubmitProp, error} = props;
    const [name, setName] = useState(initialName);
    const [url, setURL] = useState(initialURL);
    const [numChest, setNumChest] = useState(initialNumChests);
    const [catchphrase, setCatchphrase] = useState(initialCatchPhrase);
    const [position, setPosition] = useState(initialPosition? initialPosition : "Captain" );
    const [pegLeg, setpegLeg] = useState(initialPegLeg);
    const [eyePatch, seteyePatch] = useState(initialEyePatch);
    const [hookHand, sethookHand] = useState(initialHookHand);

    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({name,url,numChest,catchphrase,position,pegLeg,eyePatch,hookHand});
    }
        
    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Name:</label>
                <br />
                <span className='text-uppercase'>{error.name && error.name.message}</span>
                <br />
                <input type="text" name="name" value={name} onChange={(e) => { setName(e.target.value) }} />
            </p>
            <p>
                <label>Image URL:</label>
                <br />
                <span className='text-uppercase'>{error.name && error.url.message}</span>
                <br />
                <input type="text" name="url" value={url} onChange={(e) => {setURL(e.target.value)}}/>
            </p>
            <p>
                <label># of Treasure Chests:</label>
                <br />
                <span className='text-uppercase'>{error.name && error.numChest.message}</span>
                <br />
                <input type="number" name="numChest" value={numChest} onChange={(e) => {setNumChest(e.target.value)}}/>
            </p>
            <p>
                <label>Pirate Catch Phrase:</label>
                <br />
                <span className='text-uppercase'>{error.name && error.catchphrase.message}</span>
                <br />
                <input type="text" name="catchphrase" value={catchphrase} onChange={(e) => {setCatchphrase(e.target.value)}}/>
            </p>
            <p>
                <label>Crew Position:</label>
                <br />
                {/* <span className='text-uppercase'>{error.name && error.position.message}</span> */}
                <br />
                <select name="position" value={position} onChange={(e) => {setPosition(e.target.value)}}>
                    <option value="Captain">Captain</option>
                    <option value="First Mate">First Mate</option>
                    <option value="Quarter Master">Quarter Master</option>
                    <option value="Boatswain">Boatswain</option>
                    <option value="Powder Monkey">Powder Monkey</option>
                </select>
            </p>
            <p>
            <label> pegLeg</label>
            <input type="checkbox" name="pegLeg" value={pegLeg} onChange={(e) => {setpegLeg(!pegLeg)}} checked={pegLeg}/>
            </p>
            <p>
            <label> eyePatch</label>
            <input type="checkbox" name="eyePatch" value={eyePatch} onChange={(e) => {seteyePatch(!eyePatch)}} checked={eyePatch}/>
            </p>
            <p>
            <label> hook hand</label>
            <input type="checkbox" name="pegLeg" value={hookHand} onChange={(e) => {sethookHand(!hookHand)}} checked={hookHand}/>
            </p>
            <input type="submit" value="Add Pirate"/>
        </form>
    )
}