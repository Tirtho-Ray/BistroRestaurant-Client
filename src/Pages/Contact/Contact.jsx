import CoverPicture from "../Shared/Cover/CoverPicture";
import image from "../../assets/dashboard/image-5.jpg";
import SectionHeading from "../Shared/SectionHeading/SectionHeading";
import { MdLocationOn, MdPhone, MdTimer } from "react-icons/md";
import ContactForm from "./ContactForm";
import { Helmet } from "react-helmet-async";
const Contact = () => {
  return (
    <div>
        <Helmet>
        <title>Bistro | Contact</title>
      </Helmet>
      <div>
        {/* <CoverPicture
        img={menuImg}
        title="Our Menu"
        bio="Would you like try our dish"
      /> */}
        <CoverPicture
          img={image}
          title="Contacts us"
          bio="Would you like Our dish"
        ></CoverPicture>
        <SectionHeading 
        subHeading={'Visited us'}
        heading={'Our location'}
        >

        </SectionHeading>
        <div className=" mt-6 md:mt-12 lg:mt-20 flex justify-center">
            <div className="flex gap-3">
                <div className="h-24 w-24 md:w-52 md:h-40 lg:w-72 lg:h-56  bg-red-300 ">
                    <div className="bg-yellow-300 flex justify-center py-1 md:text-2xl md:py-2 lg:py-3 lg:text-3xl">
                        <MdPhone />
                    </div>
                    <div className=" bg-slate-300 h-[60px] w-[80px] md:h-[100px] md:w-[170px] lg:h-[140px] lg:w-[220px] md:py-2 lg:py-4 mx-auto ">
                        <p className="uppercase text-[12px] font-bold text-center md:text-xl lg:text-2xl ">Phone</p>
                        <p className="uppercase text-[8px] font-bold text-center mt-1 md:text-lg lg:text-xl ">+8801752900881</p>
                    </div>

                </div>
                <div className="h-24 w-24 md:w-52 md:h-40 lg:w-72 lg:h-56  bg-red-300 ">
                    <div className="bg-yellow-300 flex justify-center py-1 md:text-2xl md:py-2 lg:py-3 lg:text-3xl">
                        <MdLocationOn />
                    </div>
                    <div className=" bg-slate-300 h-[60px] w-[80px] md:h-[100px] md:w-[170px] lg:h-[140px] lg:w-[220px] md:py-2 lg:py-4 mx-auto ">
                        <p className="uppercase text-[12px] font-bold text-center md:text-xl lg:text-2xl ">Address</p>
                        <p className="uppercase text-[8px] font-bold text-center mt-1 md:text-lg lg:text-xl ">All country</p>
                    </div>

                </div>
                <div className="h-24 w-24 md:w-52 md:h-40 lg:w-72 lg:h-56  bg-red-300 ">
                    <div className="bg-yellow-300 flex justify-center py-1 md:text-2xl md:py-2 lg:py-3 lg:text-3xl">
                        <MdTimer />
                    </div>
                    <div className=" bg-slate-300 h-[60px] w-[80px] md:h-[100px] md:w-[170px] lg:h-[140px] lg:w-[220px] md:py-2 lg:py-4 mx-auto ">
                        <p className="uppercase text-[8px] font-bold text-center md:text-xl lg:text-2xl ">Working time</p>
                        <p className="uppercase text-[8px] font-bold text-center mt-1 md:text-sm lg:text-[17px] ">Mon - Fri: 08:00 - 22:00
Sat - Sun: 10:00 - 23:00</p>
                    </div>

                </div>
               
            </div>

        </div>
        <SectionHeading 
        subHeading={'Send us a message'}
        heading={'Contact Form'}
        >

        </SectionHeading>
        <div className="mt-12">
            <ContactForm />

        </div>
      </div>

    </div>
  );
};

export default Contact;
