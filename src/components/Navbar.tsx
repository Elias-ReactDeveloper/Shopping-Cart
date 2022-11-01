import React from "react";
import { Link } from 'react-router-dom'
import { useSelector } from "react-redux";

import { RootState } from "../redux/store";

import carrinho from '../assets/shoppingCart.png' 

import './Navbar.css'

const Navbar = () : JSX.Element => {    

    const itens = useSelector((state: RootState) => state.itens.itens)
    
    const qtdItensCarrinho = () : Number => {
        return itens.filter((item) => item.noCarrinho > 0).length
    }

    return (
        <div className="navbar-container">
            <div className="navbar-links">
                <ul className="paginas-links">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/loja'>Loja</Link></li>
                    <li><Link to='/sobre'>Sobre</Link></li>
                </ul>   
                <div className="carrinho-link">
                    <img
                        src={carrinho} alt=""
                        className="carrinho-icone"
                        style={ { display: qtdItensCarrinho() > 0 ? "initial" : "none" } }
                    />
                    <span className="carrinho-qtd">{ `${qtdItensCarrinho()}` }</span>
                </div>
            </div>
        </div>
    );
}
 
export default Navbar;