import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import client from '../../api/api'

const initialState = {
    periods: [],
    status: "idle",
    error: null
}

export const getPeriodData = createAsyncThunk('stock/getPeriodData', async ({ period, precision, range }) => {
    const response = await client.getData(period, precision, range)
    return response.data
})

const stockSlice = createSlice({
    name: 'stock',
    initialState,
    extraReducers: {
        [getPeriodData.pending]: (state, action) => {
            state.status = "loading"
        },
        [getPeriodData.fulfilled]: (state, action) => {
            state.status = 'succeeded'
            state.periods = action.payload
        },
        [getPeriodData.rejected]: (state, action) => {
            state.status = "failed"
        }
    }
})


export const selectAllPeriods = state => state.stock.periods

export default stockSlice.reducer

