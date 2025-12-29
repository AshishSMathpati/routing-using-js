import "./About.css"
import Navbar from "./Navbar";

function About() {
    return (
        <>
            <div className="about-container">
                <h1 className="heading">About</h1>

                <Navbar activeMenu="/about" />

                <h1>Hello everyone , this is the About page of this website</h1>
                <p>Click on Home Or Contact option in navbar to visit the respective pages</p>
            </div>
        </>
    );
}

export default About