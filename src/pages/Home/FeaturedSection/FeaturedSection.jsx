import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const FeaturedSection = () => {
  return (
    <section
      className="bg-[url('/src/assets/home/featured.jpg')] bg-cover pt-10 my-20 min-h-[100vh] bg-transparent bg-fixed"
      style={{
        background:
          "linear-gradient(0deg, rgba(21, 21, 21, 0.70) 0%, rgba(21, 21, 21, 0.70) 100%)",
      }}
    >
      <SectionTitle title={"---Check it out---"} heading={"FROM OUR MENU"} />
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 mt-10">
        <div>
          <img
            className="w-96"
            src="/src/assets/home/featured.jpg"
            alt="featured picture"
          />
        </div>
        <div className="text-white text-center md:text-start">
          <h3 className="text-2xl">
            March 20, 2023 <br /> WHERE CAN I GET SOME?
          </h3>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error{" "}
            <br />
            voluptate facere, deserunt dolores maiores <br /> quod nobis quas
            quasi. Eaque repellat recusandae ad laudantium tempore <br />{" "}
            consequatur consequuntur omnis ullam maxime tenetur.
          </p>
          <button className="btn btn-outline border-0 border-b-4 uppercase my-5">
            read more
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
