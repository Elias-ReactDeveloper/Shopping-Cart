import React from "react";
import { Link} from 'react-router-dom'


import './Navbar.css'

const Navbar = () : JSX.Element => {    

    return (
        <div className="navbar-container">
            <ul className="navbar-links">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/loja'>Loja</Link></li>
                <li><Link to='/sobre'>Sobre</Link></li>
            </ul>
        </div>
    );
}
 
export default Navbar;