import React from "react";
import { Link } from 'react-router-dom'
import { useSelector } from "react-redux";

import { RootState } from "../redux/store";

import carrinho from '../assets/shoppingCart.png' 

import './Navbar.css'

const Navbar = () : JSX.Element => {    

    const itens = useSelector((state: RootState) => state.itens.itens)
    
    const mostraIconeCarrinho = () : Boolean => {
        return itens.filter((item) => item.noCarrinho > 0).length > 0
    }

    return (
        <div className="navbar-container">
            <div className="navbar-links">
                <ul className="paginas-links">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/loja'>Loja</Link></li>
                    <li><Link to='/sobre'>Sobre</Link></li>
                </ul>
                <img 
                    src={carrinho} alt="" 
                    className="abrir-carrinho-icone" 
                    style={ { display: mostraIconeCarrinho() ? "initial" : "none" } } 
                />
            </div>
        </div>
    );
}
 
export default Navbar;