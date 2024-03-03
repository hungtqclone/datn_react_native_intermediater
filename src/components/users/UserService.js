import AxiosInstance from "../helpers/Axiosintance";

export const register = async (email, password) => {
    try {
        const body = {
            email: email,
            password: password
        }
        const res = await AxiosInstance().post('/api/users/register', body);
        console.log('register response', res);
        return res;
    } catch (err) {
        console.log('register error:', err);
        return err;
    }
}

export const login = async (email, password) => {
    try {
        const body = {
            email: email,
            password: password
        }
        const result = await AxiosInstance().post('/api/login-user', body);
        // console.log('login response',res);
        return result;
    } catch (err) {
        console.log('login error:', err);
        return err;
    }
}
export const editUser = async (data) => {
    try {
        const res = await AxiosInstance().post('/api/users/update-profile', data)
        console.log('editUser response', res);
        return res;
    } catch (error) {
        console.log("editUser error", error);
        return error;
    }
}

export const getProductById = async (id) => {
    try {
        const res = await AxiosInstance().get(`/api/postnews/${id}`);
        console.log('getProductById response', res.data);
        return res.data;
    } catch (error) {
        console.log("getProductById error", error);
        throw error;
    }
};