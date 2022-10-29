import React, { FC } from 'react'


import './Item.css'

interface ItemProps {
    item: {
        nome: string
        preco: number
        imagemUrl: string
    }
}


const Item: FC<ItemProps>  = ( props ): JSX.Element => {
    return ( 
        <div className='item-loja'>
            <div className='imagem-container'><img src={props.item.imagemUrl} alt="" /></div>    
            <div className='info'>
                <h3 className='titulo-item-loja'>{props.item.nome}</h3>
                <p className='preco-item-loja'>R${props.item.preco}</p>
            </div>
            <div className='add-carrinho-div'>
                <button className="add-carrinho">+add ao carrinho</button>
            </div>
        </div> );
}
 
export default Item;