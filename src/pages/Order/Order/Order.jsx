import Cover from "../../Shared/Cover/Cover";
import OrderImg from "../../../assets/shop/banner2.jpg";
import "./Order.css";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import UseMenu from "../../../hooks/UseMenu";
import OrderTab from "../OrderTab/OrderTab";
import { useState } from "react";
import { useParams } from "react-router-dom";
import HelmentTitle from "../../../components/HelmentTitle/HelmentTitle";

const Order = () => {
  const [menu] = UseMenu();
  const categories = ["salad", "pizza", "soups", "desserts", "drinks"];
  const { category } = useParams();
  const initialTabIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialTabIndex);

  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  const drinks = menu.filter((item) => item.category === "drinks");

  return (
    <div>
      <HelmentTitle routeName={"Order Food"} />
      <Cover
        img={OrderImg}
        title={"our shop"}
        desc={"Would you like to try a dish?"}
      />
      <div className="text-center mt-8">
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList className="border-none">
            <Tab selectedClassName="active-tab">SALAD</Tab>
            <Tab selectedClassName="active-tab">PIZZA</Tab>
            <Tab selectedClassName="active-tab">SOUPS</Tab>
            <Tab selectedClassName="active-tab">DESSERTS</Tab>
            <Tab selectedClassName="active-tab">DRINKS</Tab>
          </TabList>

          <TabPanel>
            <OrderTab items={salad} />
          </TabPanel>
          <TabPanel>
            <OrderTab items={pizza} />
          </TabPanel>
          <TabPanel>
            <OrderTab items={soup} />
          </TabPanel>
          <TabPanel>
            <OrderTab items={dessert} />
          </TabPanel>
          <TabPanel>
            <OrderTab items={drinks} />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Order;
