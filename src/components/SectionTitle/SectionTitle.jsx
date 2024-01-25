import PropTypes from "prop-types";

const SectionTitle = ({ title, heading }) => {
  return (
    <div className="text-center my-16">
      <p className="text-[#D99904] text-lg">{title}</p>
      <h2 className="text-3xl p-2 border-y-2 mt-2 w-[21rem] m-auto font-medium">
        {heading}
      </h2>
    </div>
  );
};

SectionTitle.propTypes = {
  title: PropTypes.node,
  heading: PropTypes.node,
};

export default SectionTitle;
