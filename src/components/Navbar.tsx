import React from "react";
import { BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from '../pages/Home'
import Loja from '../pages/Loja'
import Sobre from '../pages/Sobre'
import NotFound from '../pages/NotFound'

import './Navbar.css'

const Navbar = () : JSX.Element => {
    return (<div>
        <div className="navbar-container">
            <ul className="navbar-links">
                <li>Home</li>
                <li>Loja</li>
                <li>Sobre</li>
            </ul>
        </div>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/loja' element={<Loja />} />
                <Route path='/sobre' element={<Sobre />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    </div>);
}
 
export default Navbar;