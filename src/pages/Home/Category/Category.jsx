import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import img1 from "../../../assets/home/slide1.jpg";
import img2 from "../../../assets/home/slide2.jpg";
import img3 from "../../../assets/home/slide3.jpg";
import img4 from "../../../assets/home/slide4.jpg";
import img5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <div>
      <SectionTitle
        title={"---From 11:00am to 10:00pm---"}
        heading={"ORDER ONLINE"}
      />
      <div className="mt-6">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          centeredSlides={false}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="relative flex justify-center">
              <img src={img1} alt="" />
              <h2 className="uppercase text-center absolute bottom-5 text-white text-sm md:text-xl  font-cinzel font-medium">
                salads
              </h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative flex justify-center">
              <img src={img2} alt="" />
              <h2 className="uppercase text-center absolute bottom-5 text-white text-sm md:text-xl  font-cinzel font-medium">
                soups
              </h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative flex justify-center">
              <img src={img3} alt="" />
              <h2 className="uppercase text-center absolute bottom-5 text-white text-sm md:text-xl  font-cinzel font-medium">
                pizza
              </h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative flex justify-center">
              <img src={img4} alt="" />
              <h2 className="uppercase text-center absolute bottom-5 text-white text-sm md:text-xl  font-cinzel font-medium">
                desserts
              </h2>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative flex justify-center">
              <img src={img5} alt="" />
              <h2 className="uppercase text-center absolute bottom-5 text-white text-sm md:text-xl  font-cinzel font-medium">
                salads
              </h2>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Category;
