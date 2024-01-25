import { PropTypes } from "prop-types";

const CardItem = ({ item }) => {
  const { image, name, recipe, price } = item || {};

  return (
    <div className="flex gap-5">
      <div>
        <img
          className="w-44"
          style={{ borderRadius: "0px 200px 200px 200px" }}
          src={image}
          alt=""
        />
      </div>
      <div>
        <div className="flex justify-between">
          <h2 className="uppercase font-cinzel text-lg font-medium">
            {name} ------------------
          </h2>
          <p className="text-[#BB8506] text-lg">{price}</p>
        </div>
        <p>{recipe}</p>
      </div>
    </div>
  );
};

CardItem.propTypes = {
  item: PropTypes.object,
};

export default CardItem;
