import { useState } from "react"


function WeatherCard({weather, handleList, list, setList}){

    const [isCard, setIsCard] = useState(false)

    let temp = parseInt(((weather.main.temp) - 273.15) * (9/5) + 32)

    // let's make classname dynamic depending on temp in the future

    function handleCardExpand(){
    
        setIsCard(!isCard)

        console.log(isCard)
    }

    function addToList(){
        if (list.includes(weather)) {
            return alert(`It's already in your favorites!`)
        }
        else handleList(weather)
        
    }

    function removeItems(){
        setList([])
        fetch(`http://localhost:4000/places/${weather.id}`, {
       method: "DELETE",
     })
        .then((r) => r.json())
        .then((data) => console.log(data))
    }

    

    return (
        <div className="card">
            <h2>City: {weather.name}</h2>
            <h3>Temperature: {temp}°F</h3>
            <button className="button-1" onClick={handleCardExpand}>Click to expand!</button>
                <div className={isCard ? "expand" : "hidden"}>
                    <h3>Current Weather: {weather.weather[0].main}</h3>
                    <p>
                        {weather.weather[0].description}
                    </p>
                    <p>
                       Wind Speed: {weather.wind.speed} mph
                    </p>
                    <p>
                        Humidity: {weather.main.humidity}%
                    </p>
                    <p>
                        {}
                    </p>
                    <button className="expand-button" onClick={addToList}>Add to List!</button>
                    <button className="clear" onClick={removeItems}>Clear favorites</button>
                </div>
        </div>

    )
    
}

export default WeatherCard;