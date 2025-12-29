import "./Navbar.css"
function Navbar(activeMenu) {
    return <div className="navbar">
        <a href="/" className="menu">Home</a>
        <a href="/contact" className="menu">Contact</a>
        <a href="/about" className="menu">About</a>
    </div>
}

export default Navbar