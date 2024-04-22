import React, { useState } from "react";
import CoverPicture from "../../Shared/Cover/CoverPicture";
import shopImg from "../../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../../hooks/useMenu";
import ShopCard from "./ShopCard";
import OrderTab from "./OrderTab";
import { Helmet } from "react-helmet-async";


const OurShop = () => {
    const [tabIndex, setTabIndex]=useState(0);
    const [menu]= useMenu();
    // const {category} = useParams();
    // //console.log(category);
    const drink = menu.filter((item) => item.category === "drinks");
    const dessert = menu.filter((item) => item.category === "dessert");
    const soup = menu.filter((item) => item.category === "soup");
    const pizza = menu.filter((item) => item.category === "pizza");
    const salad = menu.filter((item) => item.category === "salad");
  

  return (
    <div>
       <Helmet>
        <title>Bistro | Shop</title>
      </Helmet>
      <div>
        <CoverPicture
          img={shopImg}
          title="Our Shop"
          bio=" WOULD TOU LIKE TO TRY OUR DISH
"
        />
       <div className="mt-4">
       <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>SALAD</Tab>
            <Tab>PIZZA</Tab>
            <Tab>SOUPS</Tab>
            <Tab>DESERTS</Tab>
            <Tab>DRINKS</Tab>
          </TabList>
          <TabPanel>
            <OrderTab items={salad}></OrderTab>
          </TabPanel>
          <TabPanel>
          <OrderTab items={pizza}></OrderTab>
          </TabPanel>
          <TabPanel>
          <OrderTab items={soup}></OrderTab>
          </TabPanel>
          <TabPanel>
          <OrderTab items={dessert}></OrderTab>
          </TabPanel>
          <TabPanel>
          <OrderTab items={drink}></OrderTab>
          </TabPanel>
        </Tabs>
       </div>
      </div>
    </div>
  );
};

export default OurShop;
