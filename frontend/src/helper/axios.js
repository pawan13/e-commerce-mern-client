import axios from "axios";

const baseURL = "http://localhost:3000/api/v1";

export const axiosProcessor = async ({ method, url, body = {} }) => {
  try {
    const data = await axios({
      method: method,
      url,
      data: body,
    });
    return data;
  } catch (error) {
    return {
      status: error,
      message: error.message,
    };
  }
};

export const apiGetCategories = () => {
  return axiosProcessor({
    method: "get",
    url: `${baseURL}/category`,
  });
};

export const apiGetProduct = () => {
  return axiosProcessor({
    method: "get",
    url: `${baseURL}/product`,
  });
};
