import menuImg from '../../../assets/shop/banner2.jpg'

const Content6 = () => {
  return (
    <div className='mt-10 md:mt-20 lg:mt-32 '>
      <div className='relative'>
        <img src={menuImg} alt="" className='opacity-70 md:h-[400px] lg:h-[480px] w-full' />
        {/* This is your relative container */}
        
        {/* Absolute menu positioned inside relative container */}
        <div className='absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center'>
          <div className='w-[300px] md:w-[600px] lg:w-[800px]'>
            <div className="text-center">
              <p className="text-[10px] md:text-[14px] lg:text-[20px] text-yellow-400">
                -- Check It Out --
              </p>
              <p className="line"></p>
              <p className="uppercase text-white text-[10px] md:text-[30px] lg:text-[40px] font-bold">
                From Our Menu
              </p>
              <p className=""></p>
            </div>
            <div className='flex justify-center md:mt-3 lg:mt-6'>
              <div className='flex items-center gap-2 md:gap-4 lg:gap-6 mt-2'>
                <div>
                  <img className='w-36 md:w-[300px] lg:w-[400px] ' src={menuImg} alt="" />
                </div>
                <div>
                  <p className='uppercase font-bold text-[8px] md:text-[20px] lg:text-[24px] text-white'>Where Can I Get Some?</p>
                  <p className='text-[5px] w-32 md:text-[12px] md:w-[300px] lg:w-[400px] text-white lg:text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, sed eligendi voluptates consequuntur et asperiores cumque eaque deleniti illo iure officiis, eum, at ullam temporibus nisi quibusdam quam possimus dolorum!</p>
                  <button className='btn btn-outline border-0 border-b-4 lg:mt-3'>Read more</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content6;
