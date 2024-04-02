import { Helmet } from "react-helmet-async";
import { PropTypes } from "prop-types";

const HelmentTitle = ({ routeName }) => {
  return (
    <>
      <Helmet>
        <title>Bistro Boss || {routeName}</title>
      </Helmet>
    </>
  );
};

HelmentTitle.propTypes = {
  routeName: PropTypes.node.isRequired,
};

export default HelmentTitle;
