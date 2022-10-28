import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface ItensState {
    itens: {
        nome: string
        preco: number
        imagemUrl: string
    }[]
}

const initialState: ItensState = {
    itens: [{
        nome: "",
        preco: 1,
        imagemUrl: ""
    }]
}