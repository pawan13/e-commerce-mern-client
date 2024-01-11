import { toast } from "react-toastify";
import { apiGetProduct } from "../../helper/axios"
import { setProductList } from "./productSlice";

export const fetchAllProduct =()=> async(dispatch)=>{
    try {
        const {result }= await apiGetProduct();
        dispatch(setProductList(result))
    } catch (error) {
        toast.error(error.message)
    }
}