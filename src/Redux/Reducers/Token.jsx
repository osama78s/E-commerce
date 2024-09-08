import { createSlice } from "@reduxjs/toolkit";

const tokenSlice = createSlice({
    name: 'token',
    initialState: {
        accessToken: '',
        userDetails: '',
    },
    reducers: {
        getToken: (state, action) => {
            state.accessToken = action.payload.accessToken,
            state.userDetails = action.payload.userDetails
        }
    }
})

export const  { getToken } = tokenSlice.actions;
export default tokenSlice.reducer;