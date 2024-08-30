import { configureStore } from "@reduxjs/toolkit";
import productSlice from '../Reducers/Products';

const store = configureStore({
    reducer: {
        products: productSlice,
    }
});

export default store;
