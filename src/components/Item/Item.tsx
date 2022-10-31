import React, { FC } from 'react'

import ContadorCarrinho from './ContadorCarrinho'

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

const Item: FC<ItemProps>  = ( props ): JSX.Element => {
    
    const addCarrinho = () : void  => {
        
    } 

    const { item } = props

    return ( 
        <div className='item-loja'>
            <div className='imagem-container'><img src={item.imagemUrl} alt="" /></div>    
            <div className='info'>
                <h3 className='titulo-item-loja'>{item.nome}</h3>
                <p className='preco-item-loja'>R${item.preco}</p>
            </div>
            <ContadorCarrinho noCarrinho={item.noCarrinho} id={item._id} />
        </div> );
}
 
export default Item;