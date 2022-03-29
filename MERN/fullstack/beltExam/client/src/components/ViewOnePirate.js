import React from "react";

const ViewOnePirate = (props) => {
    const { initialName, initialURL, initialNumChests, initialCatchPhrase, initialPosition, initialPegLeg, initialEyePatch, initialHookHand} = props;
    console.log(initialEyePatch, initialHookHand, initialPegLeg)
    return (

        <div>

            <h1>{initialName}</h1>
            <div>
            <img src={initialURL} alt="pirate image" width="100" height="100"/>
            <h4>{initialCatchPhrase}</h4>
            </div>
            <div>
            <h4>ABOUT</h4>
            <p>Position: {initialPosition}</p>
            <p>Treasures: {initialNumChests}</p>
            <p>Peg Leg: {
                initialPegLeg? "Yes" : "No"
            }</p>
            <p>Eye Patch: {
                initialEyePatch?"Yes"  : "No"
            }</p>
            <p>Hook Hand: {
                initialHookHand? "Yes" : "No"
            }</p>
            </div>

        </div>
    )
}

export default ViewOnePirate;