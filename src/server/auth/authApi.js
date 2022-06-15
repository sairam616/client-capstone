import axios from "axios";

const BASE_URL = 'http://localhost:5550';

const validateUser = async (email, password) => {
    let config = {
        headers: {
            'Content-Type': 'application/json',
        }
    };
    const data = {
        "email": email,
        "password": password
    }
    return await axios.post(`${BASE_URL}/api/auth/login`, data, config);
}

const signupUser = async (data) => {
    let config = {
        headers: {
            'Content-Type': 'application/json',
        }
    };

    return await axios.post(`${BASE_URL}/api/auth/signup`, data, config);
}

export { validateUser, signupUser };