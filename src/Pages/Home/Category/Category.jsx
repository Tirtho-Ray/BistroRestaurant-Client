import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import 'swiper/css';
import { FreeMode, Pagination } from 'swiper/modules';
import img from '../../../assets/home/slide1.jpg'
import img2 from '../../../assets/home/slide2.jpg'
import img3 from '../../../assets/home/slide3.jpg'
import img4 from '../../../assets/home/slide4.jpg'


const Category = () => {
    return (
        <div className=' md:px-10 lg:px-14'>
            <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src={img} alt="" />
        <p className='-mt-6 md:-mt-20 md:text-3xl lg:text-4xl text-center font-bold'>Salad</p>
        
        </SwiperSlide>
        <SwiperSlide><img src={img2} alt="" />
        <p className='-mt-6 md:-mt-20 md:text-3xl lg:text-4xl text-center font-bold'>Piza</p>
        
        </SwiperSlide>
        <SwiperSlide><img src={img3} alt="" />
        <p className='-mt-6 md:-mt-20 md:text-3xl lg:text-4xl text-center font-bold'>Salad</p>
        
        </SwiperSlide>
        <SwiperSlide><img src={img4} alt="" />
        <p className='-mt-6 md:-mt-20 md:text-3xl lg:text-4xl text-center font-bold'>Cake</p>
        
        </SwiperSlide>
        <SwiperSlide><img src={img} alt="" />
        <p className='-mt-6 md:-mt-20 md:text-3xl lg:text-4xl text-center font-bold'>SOUPS</p>
        
        </SwiperSlide>
        <SwiperSlide><img src={img2} alt="" />
        <p className='-mt-6 md:-mt-20 md:text-3xl lg:text-4xl text-center font-bold'>Piza</p>
        
        </SwiperSlide>
        <SwiperSlide><img src={img3} alt="" />
        <p className='-mt-6 md:-mt-20 md:text-3xl lg:text-4xl text-center font-bold'>SOUPS</p>
        
        </SwiperSlide>
        <SwiperSlide><img src={img4} alt="" />
        <p className='-mt-20  md:text-3xl  lg:text-4xl text-center font-bold'>Cake</p>
        
        </SwiperSlide>
        
        
        
      </Swiper>
            
        </div>
    );
};

export default Category;