import React from 'react';
import FollowUsFoot from './FollowUsFoot';

import ContactFoot from './ContactFoot';
import OrderFoot from './OrderFoot';
import AboutFoot from './AboutFoot/AboutFoot';

const Footer = () => {
    return (
        <div>
             <div className=' mt-4  bg-slate-300 '>
           <div className='md:flex justify-center'>
            <div className='md:grid md:grid-cols-2 gap-12 lg:grid-cols-4  py-20 px-12 md:px-0'>
                <div>
                    <FollowUsFoot />
                </div>
                <div>
                    <AboutFoot />
                </div>
                <div>
                    <ContactFoot />
                </div>
                <div>
                    <OrderFoot />
                </div>
            </div>
           </div>
           
           
         <div className='py-10'>
            <p className='text-center  text-[10px]'>© Copyright 2024 Createcomm Tech Private Limited. All Rights Reserved</p>
            <p className='text-center  text-[10px] font-Rowdies'>Developer: <a href="https://github.com/Tirtho-Ray">Tirtho Ray</a></p>
         </div>
        </div>
        </div>
    );
};

export default Footer;