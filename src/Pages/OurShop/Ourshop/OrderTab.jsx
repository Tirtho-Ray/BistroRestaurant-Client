import React from 'react';
import ShopCard from './ShopCard';

const OrderTab = ({items}) => {
    return (
        <div>
            <div className="grid grid-cols-2 md:grid-cols-3 md:gap-3 gap-2 px-10 md:px-12 lg:px-28 lg:gap-4  xl:px-56 xl:gap-4 mt-8 md:t-12 lg:t-16 ">
            {
                items.map(item => <ShopCard key={item._id} item={item}>
                    
                </ShopCard>)
            }
            </div>
        </div>
    );
};

export default OrderTab; 