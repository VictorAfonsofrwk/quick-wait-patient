import axios from 'axios';
async function createAxiosInstance(baseUrl: string) {
    const axiosInstance = axios.create({
        baseURL: baseUrl,
        timeout: 10000,
    });
    return axiosInstance
}
export async function getService(baseUrl: string, route: string) {
    const axiosInstance = await createAxiosInstance(baseUrl)
    const { data } = await axiosInstance.get(route);
    return data;
}

export async function deleteService(baseUrl: string, route: string) {
    const axiosInstance = await createAxiosInstance(baseUrl)
    await axiosInstance.delete(route);
}

export async function postService(baseUrl: string, route: string, object: any) {
    const axiosInstance = await createAxiosInstance(baseUrl)
    const { data } = await axiosInstance.post(route, object);
    return data;
}

export async function putService(baseUrl: string, route: string, object: any) {
    const axiosInstance = await createAxiosInstance(baseUrl)
    const { data } = await axiosInstance.put(route, object);
    return data;
}
