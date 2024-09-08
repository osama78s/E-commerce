import { configureStore } from "@reduxjs/toolkit";
import productSlice from '../Reducers/Products';
import tokenSlice from '../Reducers/Token';

const store = configureStore({
    reducer: {
        products: productSlice,
        token: tokenSlice,
    }
});

export default store;
