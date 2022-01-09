import { useState } from "react";

function SearchBar( {handleSearchGrab} ){

    const [city, setCity] = useState("")

    function handleSearchChange(e){
        setCity(e.target.value)
        console.log(city)
    }

    function handleSubmit(e){
        e.preventDefault()
        handleSearchGrab(city)

    }

    
    return(
        <div className="search">
            <div className="icon"></div>
            <form onSubmit={handleSubmit}>
                <input id="searchbar" type="text" placeholder="Find a city..." value={city} onChange={handleSearchChange}></input>
            </form>
        </div>
    )

}

export default SearchBar;