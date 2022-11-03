import React, { FC } from "react";
import { useDispatch } from "react-redux";

import { removerItemCarrinho } from "../../redux/slices/itensSlice";

import './Item.css'


interface ItemProps {
    item: {
        nome: string
        preco: number
        imagemUrl: string
        noCarrinho: number
        _id: number
    }
}


const Item: FC<ItemProps> = ({ item }) => {

    const dispatch = useDispatch()

    return (<div className="carrinho-item">
        <div className="lado-esquerdo">
            <img src={item.imagemUrl} alt="" />
            <div>
                <p style={{ fontSize: "12px" }}>{item.nome}</p>
                <p style={{ fontSize: "10px", color: "#989898" }}>R$ {item.preco}</p>
            </div>
        </div>
        <div className="lado-direito">
            <div style={{ fontSize: "12px" }}>R$ {item.preco * item.noCarrinho}</div>
            <div 
                className="excluir-item"
                onClick={() => dispatch(removerItemCarrinho(item._id))}
            >X</div>
        </div>
    </div>);
}
 
export default Item;