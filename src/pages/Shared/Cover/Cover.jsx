import { PropTypes } from "prop-types";
import { Parallax } from "react-parallax";

const Cover = ({ img, title, desc }) => {
  return (
    <div>
      <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={img}
        bgImageAlt="cover picture"
        strength={-200}
      >
        <div className="hero min-h-[90vh]">
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md uppercase">
              <h1 className="mb-5 text-5xl font-bold font-cinzel">{title}</h1>
              <p className="mb-5 font-cinzel ">{desc}</p>
            </div>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

Cover.propTypes = {
  img: PropTypes.node.isRequired,
  title: PropTypes.node.isRequired,
  desc: PropTypes.node.isRequired,
};

export default Cover;
