import './App.css';
import { useEffect, useState } from 'react';
import WeatherCard from './components/WeatherCard.js';
import SearchBar from './components/SearchBar';
import FavList from './components/FavList';
import NavBar from './components/NavBar';

function Home(){
  const [weather, setWeather] = useState()
  const [list, setList] = useState([])
  console.log(list)

  let key = '9e5b5c969fb2e7fc49d39336b4806ca7'

  useEffect(() => {

    

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=branson&appid=${key}`)
      .then((res) => res.json())
      .then((data) => {
        setWeather(data)
        console.log(data)
      })

      fetch(`http://localhost:4000/places`)
        .then((res) => res.json())
        .then((data) => setList(data))

  }, [])

  function lazyFetch(arg){
    let key = '9e5b5c969fb2e7fc49d39336b4806ca7'

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${arg}&appid=${key}`)
      .then((res) => res.json())
      .then((data) => {
        setWeather(data)
        console.log(data)
      })
  }

  function handleSearchGrab(arg){
    lazyFetch(arg)
  }

   function updateList(arg){
     console.log(arg)
     fetch(`http://localhost:4000/places`, {
       method: "POST",
       headers: {
         "Content-Type": "application/json"
       },
       body: JSON.stringify(arg)
     })
    .then((r) => r.json())
    .then((data) => setList([...list, data]))
   }
  
  // function handleList(arg){ 
  //   setList([...list, arg])
  //   console.log(list)
  // }

  function listClick(arg){
      lazyFetch(arg)

  }
  


  // handleCityChange will be our base to fetching new data for whatever city
  // we need to create a controlled form to submit whatever our input value is and pass it to the name within our fetch api i.e. branson/springfield/etc

  return (
    <div className="App">
      <div className="cloud">
      <h1 className='weather-title'>Weather Time</h1>
      </div>
      <NavBar />
      {weather ? <WeatherCard weather={weather} handleList={updateList} list={list} setList={setList}/> : null}
      <SearchBar handleSearchGrab={handleSearchGrab}/>
      {list <= 0 ? null : <FavList weatherListProp={list} fastClick={listClick}/>}
    </div>
  );
}

export default Home;