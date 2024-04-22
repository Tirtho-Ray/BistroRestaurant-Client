import axios from 'axios';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const axiosSecure = axios.create({
    baseURL: 'https://bistro-restaurente-server.vercel.app'
});

const useAxiosSecure = () => {
    const navigate = useNavigate();
    const { logOut } = useContext(AuthContext);

    axiosSecure.interceptors.request.use(
        function(config) {
            const token = localStorage.getItem('access_token');
            config.headers.authorization = `Bearer ${token}`;
            return config;
        },
        function(error) {
            return Promise.reject(error);
        }
    );

    axiosSecure.interceptors.response.use(
        function(response) {
            return response;
        },
        async function(error) {
            //console.log("Error response:", error.response)
            const status = error.response.status;
            // for 403 0r 401 logout the user and move the user to login page
            if (status === 401 || status === 403) {
                await logOut();
                navigate('/login');
            }
            return Promise.reject(error);
        }
    );

    return axiosSecure;
};

export default useAxiosSecure;
