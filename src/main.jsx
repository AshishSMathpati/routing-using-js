import { createRoot } from 'react-dom/client'
import './index.css'
import Contact from "./Contact"
import About from "./About"
import Home from './Home';

const root = createRoot(document.getElementById('root'));

const path = window.location.pathname

if(path === "/"){
    root.render(<Home/>)
} else if(path === "/about"){
    root.render(<About/>)
} else if(path === "/contact"){
    root.render(<Contact/>)
} else {
    root.render( <h1>404 page not found</h1> )
}
