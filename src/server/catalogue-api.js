import { axiosInstance } from "./api"
import { publicInstance } from "./api"

export const getCategories = async () => {
    try {
        const response = await axiosInstance.get('/catalogue');
        return response && response.data.payload;
    } catch (e) {
        console.error(e);
        return [];
    }
}

export const getCategoriesByName = async (data) => {
    try {
        console.log("server api:", data);
        const response = await publicInstance.get(`/catalogue/by-name/${data}`);
        return response && response.data.payload;
    } catch (e) {
        console.error(e);
        return [];
    }
}
export const getProductsByCategory = async (categoryID) => {
    try {
        const response = await publicInstance.get(`/catalogue/${categoryID}`);
        return response && response.data.payload;
    } catch (e) {
        console.error(e);
        return [];
    }
}
export const getProductDetailsById = async (productID) => {
    try {
        const response = await axiosInstance.get(`/catalogue/get-product-details/${productID}`);
        return response && response.data.payload;
    } catch (e) {
        console.error(e);
        return [];
    }
}
