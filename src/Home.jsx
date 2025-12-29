import "./Home.css"
import Navbar from "./Navbar";
function Home() {
    return (
        <div>
            <div className="home-container">
                <h1 className="heading">Home</h1>

                <Navbar activeMenu="/"/>

                <h1 className="home-heading">Hello everyone , this is the Home page of this website</h1>
                <p className="home-para">Click on About Or Contact option in navbar to visit the respective pages</p>
            </div>

            
        </div>
    );
}

export default Home