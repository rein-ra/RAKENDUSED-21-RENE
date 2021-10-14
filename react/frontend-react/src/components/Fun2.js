import React from "react";

function Fun2({ name, year }){

    const [newYear, setNewYear] = React.useState(parseInt(year))

    function timeTravel(){
        let randomYear = Math.floor(Math.random()*9999)
        setNewYear(newYear + randomYear)
    }
    
    return (
        <>
            <h1>The Timemachine</h1>
            <h2>{ newYear }</h2>
            <button onClick={ () => setNewYear(newYear+1) }>Jump to next year</button>
            <button onClick={ timeTravel }>Time travel</button>
        </>
        
    )
}


export default Fun2