import axios from "axios";

export const mockGetUsers = async (mock_server_url:string) => {
    const AXIOS = axios.create({baseURL:mock_server_url})
    return await AXIOS.get('/fetch-user-data')
}