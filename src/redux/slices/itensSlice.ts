import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import dataItens from "../../data/itens.json"

export interface IItem {
    nome: string
    preco: number
    imagemUrl: string
    noCarrinho: number
    _id: number
}

interface IItensState {
    itens: IItem[]
}

const initialState: IItensState = {
    itens: dataItens
}

export const itensSlice = createSlice({
    name: 'itens',
    initialState,
    reducers: {
        incrementarCarrinho: (state, action: PayloadAction<number>) => {
            state.itens.filter((item, indice) => {
                if(item._id === action.payload) {
                    state.itens[indice] = { ...item, noCarrinho: item.noCarrinho + 1 }
                }
            })
        },
        decrementarCarrinho: (state, action: PayloadAction<number>) => {
            state.itens.filter((item, indice) => {
                if(item._id === action.payload) {
                    if(item.noCarrinho > 0) state.itens[indice] = { ...item, noCarrinho: item.noCarrinho - 1 }
                }
            })
        },
        removerItemCarrinho: (state, action: PayloadAction<number>) => {
            state.itens.filter((item, indice) => {
                if(item._id === action.payload) {
                    if(item.noCarrinho > 0) state.itens[indice] = { ...item, noCarrinho: 0 }
                }
            })
        },
    }
}) 

export const { incrementarCarrinho, decrementarCarrinho, removerItemCarrinho } = itensSlice.actions 

export default itensSlice.reducer

