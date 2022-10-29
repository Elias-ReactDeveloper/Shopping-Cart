import { configureStore } from '@reduxjs/toolkit'

import itensReducer from './slices/itensSlice'

export const store = configureStore({
    reducer: {
        itens: itensReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>

export type appDispatch = typeof store.dispatch