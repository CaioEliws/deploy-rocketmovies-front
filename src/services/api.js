import axios from 'axios';

export const api = axios.create({
    baseURL: "https://rocketmovies-api-kg5r.onrender.com"
});