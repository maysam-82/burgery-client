import axios, { AxiosResponse } from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://sample-burgery.firebaseio.com/',
});

export default axiosInstance;

export async function getData<T>(url: string): Promise<T> {
    const response = await axiosInstance.get(url);
    return response.data;
}

export async function postData<T>(
    url: string,
    data: T
): Promise<AxiosResponse> {
    const response = await axiosInstance.post(url, data);
    return response.data;
}
