import React, { useState } from "react"

const Greeting = ({ name, age }) => {
    const [info, setInfo] = useState("no info")
    const [loading, setLoading] = useState(false)

    return (
        <>
            <h1>Greetings, { name }</h1>
            <h1>Bio: {info}</h1>
            <h3>Age: { age } </h3>
            <input 
                type="text" 
                onChange={event => setInfo(event.target.value)}
                placeholder="Tell us about you"
            /><br/>
            <button onClick={() => setLoading(!loading)}>Load</button>

            { loading ?
                <div>
                    <p>Loading {name}s' profile...</p>
                    <img class="gif" src="https://c.tenor.com/q_CiCIBMneUAAAAC/dog-bubblewrap.gif" alt="Is loading"/>

                </div>
                
                : 
                <div>
                    <img className="gif" src="https://storage.googleapis.com/gweb-uniblog-publish-prod/original_images/Social_dino-with-hat.gif" alt="Gaming"></img>
                </div>
                
            }
        </>
    )
}

export default Greeting