import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Content1 from "../HomeSmallContent/Content1";
import Content2 from "../HomeSmallContent/Content2";
import Content3 from "../HomeSmallContent/Content3";
import Content4 from "../HomeSmallContent/Content4";
import Content5 from "../HomeSmallContent/Content5";
import Content6 from "../HomeSmallContent/Content6";
import TestimonalisContent from "../HomeSmallContent/TestimonalisContent";
import PopularCard from "../PopulerMenu/PopularCard";
import PopularMenu from "../PopulerMenu/PopularMenu";
import Review from "../Revew/Review";


const Home = () => {
    return (
        <div>
             <Helmet>
        <title>Bistro Home</title>
      </Helmet>
           <Banner />
           <Content1></Content1>
           <Category />
           <Content2 />
           <Content3 />
           <PopularMenu />
           <Content4></Content4>
           <Content5 />
           <PopularCard />
           <Content6 />
           <TestimonalisContent />
           <Review />
           
           

        </div>
    );
};

export default Home;