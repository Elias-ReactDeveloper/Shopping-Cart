import React from "react";

import Item from '../components/Item'

import './Loja.css'

const Loja = (): JSX.Element => {

    return ( 
        <div className="itens">
            <h2>Store</h2>
            <Item />
        </div>
     );
}
 
export default Loja;