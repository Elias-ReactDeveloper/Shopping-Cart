import React, { SetStateAction, Dispatch, FC } from "react";
import { Link } from 'react-router-dom'
import { useSelector } from "react-redux";

import { RootState } from "../redux/store";

import carrinho from '../assets/shoppingCart.png' 

import './Navbar.css'

interface IProps {
    carrinhoAberto: Boolean
    setCarrinhoAberto: Dispatch<SetStateAction<Boolean>>
}

const Navbar: FC<IProps> = ({ carrinhoAberto, setCarrinhoAberto }) : JSX.Element => {    

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
                <div 
                    className="carrinho-link"
                    style={ { display: qtdItensCarrinho() > 0 ? "initial" : "none" } }
                >
                    <img
                        src={carrinho} alt=""
                        className="carrinho-icone"
                        onClick={() => setCarrinhoAberto(true)}
                    />
                    <span className="carrinho-qtd">{ `${qtdItensCarrinho()}` }</span>
                </div>
            </div>
        </div>
    );
}
 
export default Navbar;