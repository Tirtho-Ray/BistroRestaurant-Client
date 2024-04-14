import { Helmet } from "react-helmet-async";
import CoverPicture from "../Shared/Cover/CoverPicture";
import menuImg from "../../assets/menu/banner3.jpg";
import dessertImg from "../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../assets/menu/pizza-bg.jpg";
import saladImg from "../../assets/menu/salad-bg.jpg";
import soupImg from "../../assets/menu/soup-bg.jpg";
import useMenu from "../../hooks/useMenu";
import SectionHeading from "../Shared/SectionHeading/SectionHeading";
import MenuCategory from "./MenuCategory/MenuCategory";
import AllButton from "../Shared/AllButton/AllButton";
const Menu = () => {
  const [menu] = useMenu();
  // const popular = menu.filter(item => item.category === 'popular');
  const offered = menu.filter((item) => item.category === "offered");
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");

  return (
    <div>
      <Helmet>
        <title>Bistro | Menu</title>
      </Helmet>

      <CoverPicture
        img={menuImg}
        title="Our Menu"
        bio="Would you like try our dish"
      />
      {/* <MenuContent /> */}
      <SectionHeading
        subHeading={"Don't Miss"}
        heading={"Today's offer"}
      ></SectionHeading>
      {/* offered menu items */}
      <MenuCategory items={offered}></MenuCategory>
      {/* Offer Button */}
      <div className="text-center mt-2 md:mt-4 lg:mt-6 ">
        <AllButton button={"Order Your Favorite Food"}></AllButton>
      </div>
      {/* Dessert cover picture */}
      <div className="">
        <CoverPicture
          img={dessertImg}
          title="desert"
          bio=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit soluta labore nesciunt? Ipsam, recusandae dolor.
"
        />
        {/* desert menu */}
        <MenuCategory items={dessert}></MenuCategory>
        {/* dessert button*/}
        <div className="text-center mt-2 md:mt-4 lg:mt-6 ">
        <AllButton button={"Order Your Favorite Food"}></AllButton>
      </div>
      {/*pizza  */}
      <CoverPicture
          img={pizzaImg}
          title="pizza"
          bio=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit soluta labore nesciunt? Ipsam, recusandae dolor.
"
        />
        {/* pizza menu */}
      <MenuCategory items={pizza}></MenuCategory>
      {/* pizza button */}
      <div className="text-center mt-2 md:mt-4 lg:mt-6 ">
        <AllButton button={"Order Your Favorite Food"}></AllButton>
      </div>

      {/*  */}
      <CoverPicture
          img={saladImg}
          title="salad"
          bio=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit soluta labore nesciunt? Ipsam, recusandae dolor.
"
        />
        {/* salad menu */}
        <MenuCategory items={salad}></MenuCategory>
        {/* salad button */}
      <div className="text-center mt-2 md:mt-4 lg:mt-6 ">
        <AllButton button={"Order Your Favorite Food"}></AllButton>
      </div>

      <CoverPicture
          img={soupImg}
          title="soup"
          bio=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit soluta labore nesciunt? Ipsam, recusandae dolor.
"
        />
        {/* soup menu */}
        <MenuCategory items={soup}></MenuCategory>
        {/* salad button */}
      <div className="text-center mt-2 md:mt-4 lg:mt-6 ">
        <AllButton button={"Order Your Favorite Food"}></AllButton>
      </div>


      </div>
    </div>
  );
};

export default Menu;
