import React, { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { RootState } from "../../redux/store";

import Item from './Item'

import './Carrinho.css'

interface IProps {
    carrinhoAberto: Boolean
    setCarrinhoAberto: Dispatch<SetStateAction<Boolean>>
}

const Carrinho: FC<IProps> = ({ carrinhoAberto, setCarrinhoAberto }) => {
    
    const [total, setTotal] = useState<Number>()

    const itens = useSelector((state: RootState) => state.itens.itens)

    useEffect(() => {
        const total : Number = itens.reduce((valor, item) => {
            if(item.noCarrinho > 0) return valor + (item.noCarrinho * item.preco)
            return valor
        }, 0)
        setTotal(total)
    }, [ itens ])


    return ( 
    <div className="carrinho-tela-toda" style={ { display: carrinhoAberto ? "initial" : "none" } }>
        <div className="carrinho-container" style={ { right: carrinhoAberto ? "0" : "-300px" } }>
            <div className="carrinho-cabecalho">
                <h3>Carrinho</h3>
                <span
                    onClick={() => setCarrinhoAberto(false)}
                    style={ { cursor: 'pointer' }}
                >X</span>
            </div>
            <div>
                {
                    itens.map((item) => {
                        if(item.noCarrinho > 0) return <div> <Item item={item} /> </div>
                    })
                }
            </div>
            <div className="total">Total: R${`${total}`}</div>
        </div>
    </div>);
}
 
export default Carrinho;