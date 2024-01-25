import { PropTypes } from "prop-types";

const MenuCard = ({ item }) => {
  const { image, name, recipe } = item || {};

  return (
    <div>
      <div className="max-w-sm bg-white border text-center border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img className="rounded-t-lg" src={image} alt="Menu Image" />
        </a>
        <div className="p-5 flex justify-between flex-col">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {name.slice(0, 20)}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {recipe.slice(0, 50)}
          </p>
          <div>
            <button
              href="#"
              className="inline-flex items-center uppercase px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

MenuCard.propTypes = {
  item: PropTypes.object.isRequired,
};

export default MenuCard;
