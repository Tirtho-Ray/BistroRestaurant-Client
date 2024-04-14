import banner from '../../../assets/home/chef-service.jpg';

const Content2 = () => {
    return (
        <div className='mt-5 md:mt-12 lg:mt-20 relative'>
            <img className='cover lg:h-[450px]' src={banner} alt="" />
            <div className='absolute inset-0 flex justify-center items-center'>
                <div className='h-20 w-[280px] bg-white md:h-40 md:w-[500px] lg:h-60 lg:w-[800px]'>
                    <div className='px-2 py-2 md:py-6 md:px-4 lg:py-8 lg:px-14'>
                    <p className='uppercase text-[12px] md:text-[20px] text-center lg:text-[35px] '>Bistro Boss</p>
                    <p className='text-[8px] text-center md:text-[12px] md:mt-2 lg:text-[18px] '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas hic et culpa minima corporis rem explicabo cupiditate rerum adipisci non suscipit atque omnis veritatis, sed alias. Quo atque dolorem aspernatur.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Content2;
