import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./pages/category/catSlice"

const store = configureStore({
    reducer: {
        category : categoryReducer,
    }
})

export default store;