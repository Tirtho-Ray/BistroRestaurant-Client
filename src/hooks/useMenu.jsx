import React from 'react';
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useMenu = () => {
    const axiosPublic = useAxiosPublic();
    const {refetch, data:menu=[],isPending:loading} = useQuery({
        queryKey: ['menu'],
        queryFn: async ()=>{
            const res = await axiosPublic.get(`/menu`)
        return res.data;
        }

    })
    return [menu,refetch,loading]
};

export default useMenu;