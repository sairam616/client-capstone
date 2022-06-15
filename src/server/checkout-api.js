import { axiosInstance } from "./api";

export const addProductToCart = async (details) => {
    const response = await axiosInstance.post('/checkout/add-cart', details);
    return response && response.data.payload;
}

export const getUserAddresses = async () => {
    const response = await axiosInstance.get('/checkout/addresses');
    return response && response.data.payload;
}

export const addNewUserAddress = async (data) => {
    const response = await axiosInstance.post('/checkout/add-address', data);
    return response && response.data.payload;
}

export const updateAddressIDForCart = async (data) => {
    const response = await axiosInstance.put('/checkout/update-cart-address', data);
    return response && response.data.payload;
}

export const getCartBillDetails = async () => {
    const response = await axiosInstance.get('/checkout/calculate-bill');
    return response && response.data.payload;
}

export const getUserCartInfo = async () => {
    const response = await axiosInstance.get('/checkout/get-cart');
    return response && response.data.payload;
}

export const deleteProductFromCart = async (data) => {
    const response = await axiosInstance.delete(`checkout/delete-item-cart/${data.product_id}`);
    return response && response.data.payload;
}

export const deleteAllProductsFromCart = async () => {
    const response = await axiosInstance.delete('/checkout/delete-cart');
    return response && response.data.payload;
}
export const updateProductQtyInCart = async (data) => {
    const response = await axiosInstance.put('/checkout/update-cart-qty', data);
    return response && response.data.payload;
}
export const updateProductStockQty = async (cartid) => {
    const response = await axiosInstance.put('/checkout/update-stock-qty', cartid);
    return response && response.data.payload;
}
