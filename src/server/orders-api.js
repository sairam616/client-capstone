import { axiosInstance } from "./api";


export const addCartToOrders = async (cartID) => {
    const response = await axiosInstance.post('/orders/add-orders', cartID);
    return response && response.data.payload;
}

export const getOrdersInfo = async () => {
    const response = await axiosInstance.get('/orders/get-orders');
    return response && response.data.payload;
}