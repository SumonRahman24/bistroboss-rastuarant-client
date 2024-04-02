import { PropTypes } from "prop-types";
import CardItem from "../CardItem/CardItem";
import Cover from "../../pages/Shared/Cover/Cover";
import SectionTitle from "./../SectionTitle/SectionTitle";
import { Link } from "react-router-dom";

const MenuCategory = ({
  items,
  title,
  coverImg,
  desc,
  heading,
  subHeading,
}) => {
  return (
    <div className="">
      {title && <Cover img={coverImg} title={title} desc={desc} />}
      {heading && <SectionTitle title={heading} heading={subHeading} />}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 container m-auto md:px-0 mt-10 mb-10">
        {items?.map((item) => (
          <CardItem key={item?._id} item={item} />
        ))}
      </div>
      <div className="flex justify-center ">
        <Link to={`/order/${title}`}>
          <button className="btn btn-outline border-0 border-b-4 uppercase my-5 ">
            ORDER YOUR FAVOURITE FOOD
          </button>
        </Link>
      </div>
    </div>
  );
};

MenuCategory.propTypes = {
  items: PropTypes.array,
  coverImg: PropTypes.node,
  title: PropTypes.node,
  desc: PropTypes.node,
  heading: PropTypes.string,
  subHeading: PropTypes.string,
};

export default MenuCategory;
