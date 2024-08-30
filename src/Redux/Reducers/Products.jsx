import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk("productSlice/fetchProducts", async () => {
    const res = await axios.get('https://e-commerce-production-2d41.up.railway.app/api/products')
    return res.data.products;
});

const initialState = {
    products: [],
    loading: false
}
const productSlice = createSlice({
    name: 'productSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.loading = false;
            state.products = action.payload;
        });
    }
});
export const {} = productSlice.actions;
export default productSlice.reducer; 
