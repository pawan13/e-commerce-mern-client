import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    productList: [],
}

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers:{
       setProductList: (state, {payload})=>{
        if (state.productList.length === 0 && payload.length === 0) {
            return;
          }
          state.productList = payload;
       }
    }
})
export const {reducer, actions} = productSlice;
export const {setProductList} = actions;
export default reducer;