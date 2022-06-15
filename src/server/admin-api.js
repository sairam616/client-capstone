import { adminInstance } from "./api";

export const getCatalogue = async (data) => {
    try {
        const response = await adminInstance.post("/admin/get-catalogue", data);
        return response && response.data.payload;
    } catch (e) {
        console.error(e);
        return [];
    }
};
export const getSalesData = async () => {
    console.log("Inside getSalesData");
    try {
        const response = await adminInstance.get("/admin/get-sales");
        return response && response.data.payload;
    } catch (e) {
        console.error(e);
        return [];
    }
};

export const addCatalogueItem = async (data) => {
    try {
        const response = await adminInstance.post("/admin/add-catalogue", data);
        return response && response.data.payload;
    } catch (e) {
        console.error(e);
        return [];
    }
};
export const updateCatalogueItem = async (data) => {
    try {
        const response = await adminInstance.post("/admin/add-catalogue", data);
        return response && response.data.payload;
    } catch (e) {
        console.error(e);
        return [];
    }
};

export const deleteCatalogueItem = async (data) => {
    try {
        const response = await adminInstance.delete(
            "/admin/delete-catalogue",
            data
        );
        return response && response.data.payload;
    } catch (e) {
        console.error(e);
        return [];
    }
};

export const addCategory = async (data) => {
    try {
        const response = await adminInstance.post("/admin/add-category", data);
        return response && response.data.payload;
    } catch (e) {
        console.error(e);
        return [];
    }
};
export const updateCategory = async (data) => {
    try {
        const response = await adminInstance.put("/admin/update-category", data);
        return response && response.data.payload;
    } catch (e) {
        console.error(e);
        return [];
    }
};
export const getCategoryById = async (categoryID) => {
    try {
        const response = await adminInstance.get(`/admin/category/${categoryID}`);
        return response && response.data.payload;
    } catch (e) {
        console.error(e);
        return [];
    }
};
export const deleteCategoryById = async (categoryID) => {
    console.log("Product idis :", categoryID);
    try {
        const response = await adminInstance.delete(
            `/admin/category/${categoryID}`
        );
        return response && response.data.payload;
    } catch (e) {
        console.error(e);
        return [];
    }
};
export const deleteProductById = async (productID) => {
    console.log("category id:", productID);
    try {
        const response = await adminInstance.delete(`/admin/product/${productID}`);
        return response && response.data.payload;
    } catch (e) {
        console.error(e);
        return [];
    }
};
export const addProducts = async (data) => {
    try {
        const response = await adminInstance.post("/admin/add-products", data);
        return response && response.data.payload;
    } catch (e) {
        console.error(e);
        return [];
    }
};
export const updateProduct = async (data) => {
    try {
        const response = await adminInstance.put("/admin/update-product", data);
        return response && response.data.payload;
    } catch (e) {
        console.error(e);
        return [];
    }
};

export const addSalesData = async (data) => {
    try {
        const response = await adminInstance.post("/admin/add-sales", data);
        return response && response.data.payload;
    } catch (e) {
        console.error(e);
        return [];
    }
};
