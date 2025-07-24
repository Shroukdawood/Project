import axios from "axios";

export const MainApi = axios.create({
    baseURL:"https://dummyjson.com",
    headers:{
        Auth:"User One"
    }
});