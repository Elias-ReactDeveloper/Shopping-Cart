import React, { FC } from "react";
import { useDispatch } from "react-redux";

import { incrementarCarrinho, decrementarCarrinho, removerItemCarrinho } from "../../redux/slices/itensSlice";

import './ContadorCarrinho.css'

interface ContadorCarrinhoProps {
    noCarrinho: number
    _id: number
}

const ContadorCarrinho: FC<ContadorCarrinhoProps> = ( { noCarrinho, _id  }) => {

    const dispatch = useDispatch()

    return <div>
        { 
            noCarrinho === 0 ?
                <div className="contador-carrinho">
                    <button 
                        onClick={() => dispatch(incrementarCarrinho(_id))} 
                        className="add-carrinho">
                        + add ao carrinho
                    </button> 
                </div>
            :   
                <div className="contador-carrinho">
                    <div>
                        <button onClick={() => dispatch(decrementarCarrinho(_id))} className="mudarCarrinho">-</button>
                        <span className="quantidade-carrinho">{ noCarrinho }</span> no carrinho
                        <button onClick={() => dispatch(incrementarCarrinho(_id))} className="mudarCarrinho">+</button>
                    </div>
                    <button onClick={() => dispatch(removerItemCarrinho(_id))} className="botao-remover">Remover</button>
                </div>
    }
    </div>
}
 
export default ContadorCarrinho;