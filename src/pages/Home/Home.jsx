import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";
import CallUs from "./CallUs/CallUs";
import Category from "./Category/Category";
import ChefRecommend from "./ChefRecommend/ChefRecommend";
import ChefService from "./ChefService/ChefService";
import FeaturedSection from "./FeaturedSection/FeaturedSection";
import PopularMenu from "./PopularMenu/PopularMenu";
import Testimonial from "./Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Banner />
      <div className="my-10 md:px-20">
        <Category />
        <ChefService />
        <PopularMenu />
        <CallUs />
        <ChefRecommend />
      </div>
      <FeaturedSection />
      <Testimonial />
    </div>
  );
};

export default Home;
