import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom";


function Map(){

    // const [forecast, setForecast] = useState()
    // const [list, setList] = useState([])
    // let key = '9e5b5c969fb2e7fc49d39336b4806ca7'

    // useEffect(() => {
    //     fetchAPI('branson')  
    // }, [])


    // function fetchAPI(arg){
    //     fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${arg}&cnt=3&appid=${key}`)
    //     .then((res) => res.json())
    //     .then((data) => {
    //       setForecast(data)
    //       console.log(forecast)
    //     })
    // }
    // // const weatherForecast = weather.map((w) => {
    // //     let unixTime = w.dt 
    // //     let milli = unixTime * 1000

    // //     const dateObject = new Date(milli)
    // //     const dateFormat = dateObject.toLocaleString()

    // //     console.log(dateFormat)

    // //     return (
    // //         <div>
    // //             <p>yo!</p>
    // //         </div>
    // //     )
    // // })

    // function handleClick(){
    //     console.log(forecast.city.name)
    //     fetchAPI('branson')
    // }

    const navigate = useNavigate()

    return (
        <div className="map">
            <h2>
                Weather Radar
            </h2>
            <iframe className="radar" width="650" height="700" src="https://embed.windy.com/embed2.html?lat=39.673&lon=-92.153&detailLat=36.669&detailLon=-93.245&width=650&height=450&zoom=5&level=surface&overlay=wind&product=ecmwf&menu=&message=&marker=&calendar=now&pressure=&type=map&location=coordinates&detail=&metricWind=default&metricTemp=default&radarRange=-1" frameborder="0"></iframe>
            <button className="home" onClick={() => navigate('/')}>Home</button>
        </div>
    )
}

export default Map;