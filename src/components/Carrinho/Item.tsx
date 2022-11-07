import React, { FC } from "react";
import { useDispatch } from "react-redux";

import { IItem } from '../../redux/slices/itensSlice'

import { removerItemCarrinho } from "../../redux/slices/itensSlice";

import './Item.css'


interface ItemProps {
    item: IItem
}

const Item: FC<ItemProps> = ({ item }) => {

    const dispatch = useDispatch()

    return (<div className="carrinho-item">
        <div className="lado-esquerdo">
            <img src={item.imagemUrl} alt="" />
            <div>
                <p>
                    <span style={{ fontSize: "14px", marginRight: "4px"}}>{item.nome}</span>
                    {
                        item.noCarrinho > 1 ? 
                        <span style={{ fontSize: "12px", color: "#989898" }}>x{item.noCarrinho}</span>
                        : null
                    }
                </p>
                <p style={{ fontSize: "12px", color: "#989898" }}>R$ {item.preco}</p>
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