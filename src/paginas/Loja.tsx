import React from "react";
import { useSelector, useDispatch } from "react-redux";

import Item from '../components/Item/Item'

import type { RootState } from "../redux/store";

import './Loja.css'

const Loja = (): JSX.Element => {

    const itens = useSelector((state: RootState) => state.itens.itens)

    return ( 
        <div>
            <div className="itens-container">
                <h2>Loja</h2>
                <div className="itens">
                    {
                        itens.map((item) => <Item item={item} key={item._id} />)
                    }
                </div>
            </div>
        </div>
     );
}
 
export default Loja;