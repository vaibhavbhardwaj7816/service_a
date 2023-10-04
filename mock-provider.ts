import axios from "axios";

export const mockGetUsers = (mock_server_url:string) => {
    const AXIOS = axios.create({baseURL:mock_server_url})
    return AXIOS.get('/fetch-user-data').then((res) => res.data)
}