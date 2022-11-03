import React, { FC } from 'react'

import ContadorCarrinho from './ContadorCarrinho'

import { IItem } from '../../redux/slices/itensSlice'

import './Item.css'

interface ItemProps {
    item: IItem
}

const Item: FC<ItemProps>  = ({ item }): JSX.Element => {

    return ( 
        <div className='item-loja'>
            <div className='imagem-container'><img src={item.imagemUrl} alt="" /></div>    
            <div className='info'>
                <h3 className='titulo-item-loja'>{item.nome}</h3>
                <p className='preco-item-loja'>R${item.preco}</p>
            </div>
            <ContadorCarrinho noCarrinho={item.noCarrinho} _id={item._id} />
        </div> );
}
 
export default Item;