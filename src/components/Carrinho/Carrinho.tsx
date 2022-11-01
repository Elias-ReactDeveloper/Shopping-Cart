import React from "react";
import { useSelector } from "react-redux";

import { RootState } from "../../redux/store";

import Item from './Item'

import './Carrinho.css'

const Carrinho = () => {

    const itens = useSelector((state: RootState) => state.itens.itens)

    return ( <div className="carrinho-container">
        <div className="carrinho-cabecalho">
            <h3>Carrinho</h3>
            <span>X</span>
        </div>

        <div>
            {
                itens.map((item) => {
                    if(item.noCarrinho > 0) return <div> <Item item={item} /> </div>
                })
            }
        </div>
    </div> );
}
 
export default Carrinho;