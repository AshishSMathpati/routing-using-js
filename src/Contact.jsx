import "./Contact.css"
import Navbar from "./Navbar";

function Contact() {
    return (
        <>
            <div className="contact-section">
                <h1 className="heading">Contact</h1>

                <Navbar activeMenu="/contact" />

                <h1 className="contact-heading">Hello everyone , this is the Contact page of this website</h1>
                <p className="contact-para">Click on About Or Home option in navbar to visit the respective pages</p>
            </div>
        </>
    );
}
export default Contact