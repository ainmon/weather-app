import { useState } from "react";
import { Link } from "react-router-dom";

function NavBar(){
   
    const [click, setClick] = useState(true)

    function handleClick(){
        setClick(!click)
        console.log(click)
    }

    
    return (
        <>
            <label htmlFor="check">
                <input type="checkbox" id="check" onClick={handleClick}/>
                <span></span>
                <span></span>
                <span></span>
                <li className="link">
                    {click ? null : <Link to="/">Home</Link>}
                </li>
                <li className="link">
                    {click ? null : <Link to="/map">Map</Link>}
                </li>
                <li className="link">
                    {click ? null : <Link to="/about">About</Link>}
                </li>
            </label>
        </>
    )
}

export default NavBar;