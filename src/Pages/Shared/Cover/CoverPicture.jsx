
const CoverPicture = ({img,bio,title}) => {
    return (
        <div className=' relative'>
        <img className='cover h-60 md:h-80 lg:h-[500px] w-full' src={`${img}`} alt="" />
        <div className='absolute inset-0 flex justify-center items-center '>
            <div className='h-20 w-[280px]  md:h-40 md:w-[500px] lg:h-60 lg:w-[800px]  bg-opacity-55 bg-black flex justify-center items-center '>
                <div className='px-2 py-2 md:py-6 md:px-4 lg:py-8 lg:px-14 '>
                <p className=' text-[12px] md:text-[20px] text-center lg:text-[35px]  text-white'>{`${title}`}</p>
                <p className='text-[8px] text-center md:text-[12px] md:mt-2 lg:text-[18px] text-white'>{bio}</p>
                </div>
            </div>
        </div>
    </div>
    );
};

export default CoverPicture;