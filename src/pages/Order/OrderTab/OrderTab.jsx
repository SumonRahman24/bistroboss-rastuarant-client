import { PropTypes } from "prop-types";
import MenuCard from "../../../components/MenuCard/MenuCard";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const OrderTab = ({ items }) => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <>
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center mb-16  px-16">
            {items?.map((item) => (
              <MenuCard key={item?._id} item={item} />
            ))}
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

OrderTab.propTypes = {
  items: PropTypes.array.isRequired,
};

export default OrderTab;
