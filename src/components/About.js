import { useNavigate } from "react-router-dom";

function About(){

    const navigate = useNavigate()

    return (
        <div>
            <h1 className="about">ABOUT ME</h1>
            <p>My name is Adam; a Missouri-based developer who geeks out on front-end development. </p>
            <p>Specifically: JavaScript, React and (a little bit of back-end) Ruby!</p>
            <p>Thank you for taking the time to check out my very first React project!</p>
            <button className="2ndhome" onClick={() => navigate('/')}>Home</button>
        </div>
    )
}

export default About;