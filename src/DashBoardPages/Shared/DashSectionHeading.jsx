import React from "react";

const DashSectionHeading = ({heading,subHeading}) => {
  return (
    <div>
      <div className="mx-auto w-40 md:w-80 lg:w-96 mb-5 md:mb-10">
        <p className="text-[10px] md:text-[14px] lg:text-[20px] text-center text-yellow-400">
          ----- {subHeading} -----
        </p>
        <h3 className="uppercase md:text-[30px] lg:text-[40px] border-y-2 md:border-y-4 text-center mt-1 md:mt-2">
          {heading}
        </h3>
      </div>
    </div>
  );
};

export default DashSectionHeading;
