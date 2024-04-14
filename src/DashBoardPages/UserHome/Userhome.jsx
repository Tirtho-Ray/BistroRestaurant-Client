import React, { useState } from 'react';
import { MdHome, MdMenu, MdMenuBook, MdPhone } from 'react-icons/md';
import { css } from "@emotion/react";
import SyncLoader from "react-spinners/SyncLoader";
import UserProfile from './UserProfile';

const override = css`
  display: block;
  margin: 0 auto;
`;

const Userhome = () => {
    const {loader,setLoader}=useState(false)
    return (
        <div>
            <p className='mb-3 text-xl font-bold'> Hi well come back</p>
           <div className='grid md:grid-cols-3 gap-3'>
            <div
            style={{
                background:
                  "linear-gradient(to left,rgb(187, 152, 145), rgb(187, 52, 245))",
              }}
             className='h-20 w-40 md:h-24 md:w-[170px] lg:w-60  rounded-lg'>
                 <div className='flex justify-center items-center gap-3 py-4'>
                    <div className='text-3xl text-white'>
                        <MdMenuBook />
                    </div>
                    {loader ? (
                           <SyncLoader color={"#ffffff"} loading={true} css={override} size={10} />
                        ) : (
                            <div className='text-white'>
                                <p className='text-xl font-bold'>205</p>
                                <p className='text-md font-serif'>MENU</p>
                            </div>
                        )}
                 </div>
            </div>
            <div
            style={{
                background:
                  "linear-gradient(to left, rgb(211, 162, 286),rgb(11, 62, 200))",
              }}
             className='h-20 w-40 md:h-24 md:w-[170px] lg:w-60  rounded-lg'>
                 <div className='flex justify-center items-center gap-3 py-4'>
                    <div className='text-3xl text-white'>
                        <MdHome />
                    </div>
                    <div  className='text-white'>
                        <p className='text-xl font-bold'>200</p>
                        <p className='text-md font-serif '>Shop</p>
                    </div>
                 </div>
            </div>
            <div
            style={{
                background:
                  "linear-gradient(to left, rgb(120, 174, 255), rgb(206, 174, 100))",
              }}
             className='h-20 w-40 md:h-24 md:w-[170px] lg:w-60 bg-red-400 rounded-lg'>
                 <div className='flex justify-center items-center gap-3 py-4'>
                    <div className='text-3xl text-white'>
                        <MdPhone />
                    </div>
                    <div className='text-white'>
                        <p className='text-xl font-bold'>3</p>
                        <p className='text-md font-serif '>Contact</p>
                    </div>
                 </div>
            </div>
           </div>
           <div>
            <UserProfile />
           </div>
            
        </div>
    );
};

export default Userhome;