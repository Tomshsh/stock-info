import { configureStore } from "@reduxjs/toolkit";
import quoteSlice from "./features/quote/quoteSlice";
import stockReducer from './features/stock/stockSlice'

export const store = configureStore({
    reducer: {
        stock: stockReducer,
        quote: quoteSlice
    }
})