import axios from 'axios';
import React from 'react';

const axiosPublic = axios.create({
    baseURL:'https://bistro-restaurente-server.vercel.app'
})

const useAxiosPublic = () => {
    return axiosPublic;
}
export default useAxiosPublic;
// https://bistro-restaurant-client.vercel.app/
// http://localhost:5174