

const SectionHeading = ({heading,subHeading}) => {
    return (
        <div className="mx-auto w-32 md:w-60 lg:w-80 mt-10 md:mt-16 lg:mt-20 " >
            <p  className="text-[10px] md:text-[14px] lg:text-[20px] text-center">----- {subHeading} -----</p>
            <h3 className="uppercase md:text-[30px] lg:text-[40px] border-y-2 md:border-y-4 text-center">{heading}</h3>
        </div>
    );
};

export default SectionHeading;