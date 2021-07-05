import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import client from "../../api/api";

const initialState = {
    info: {},
    status: "idle",
    error: null
}

export const getQuoteInfo = createAsyncThunk('quote/getQuoteInfo', async () => {
    const response = await client.getQuoteInfo()
    return response.data["Global Quote"]
})

const quoteSlice = createSlice({
    name: 'quote',
    initialState,
    extraReducers: {
        [getQuoteInfo.pending]: (state, action) => {
            state.status = "loading"
        },
        [getQuoteInfo.fulfilled]: (state, action) => {
            const quote = {}
            Object.keys(action.payload).forEach(k => {
                quote[k.split('. ')[1]] = action.payload[k]
            })
            state.status = 'succeeded'
            state.info = quote
        },
        [getQuoteInfo.rejected]: (state, action) => {
            state.status = "failed"
        }
    }
})

export const selectQuoteInfo = (state) => state.quote.info
export const selectQuoteStatus = state => state.quote.status

export default quoteSlice.reducer