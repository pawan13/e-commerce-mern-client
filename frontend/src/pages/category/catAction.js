import { apiGetCategories } from "../../helper/axios";
import { setCatList } from "./catSlice";
import { toast } from "react-toastify";

export const fetchAllCategory = () => async (dispatch) => {
  try {
    const { data } = await apiGetCategories();
    const { result } = data;
    console.log("result", result);
    dispatch(setCatList(result));
  } catch (error) {
    toast.error(error.message);
  }
};
