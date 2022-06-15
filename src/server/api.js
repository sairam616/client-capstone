import axios from "axios";
import { getStoageItem } from "../utils/storage-utils";

const BASE_URL = process.env.SERVER_URL || 'http://localhost:5550';

/**Add Token for user requests */
export const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 1000
});


axiosInstance.interceptors.request.use(function (config) {
    config.headers['x-auth-token'] = getStoageItem('token');
    return config;
}, null);

export const publicInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 1000
});

/**Add Token for admin requests */
export const adminInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 1000
});
adminInstance.interceptors.request.use(function (config) {
    config.headers['x-auth-token'] = getStoageItem('admintoken');
    return config;
}, null);