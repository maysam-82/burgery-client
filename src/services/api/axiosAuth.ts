import axios from 'axios';

const axiosAuthInstance = axios.create({});

export default axiosAuthInstance;

export async function getAuthData<T>(url: string): Promise<T> {
    const response = await axiosAuthInstance.get(url);
    return response.data;
}

export async function postAuthData<T, R>(url: string, data: T): Promise<R> {
    const response = await axiosAuthInstance.post(url, data);
    return response.data;
}
