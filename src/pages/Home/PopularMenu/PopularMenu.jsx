import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import CardItem from "../../../components/CardItem/CardItem";
import UseMenu from "../../../hooks/UseMenu";

const PopularMenu = () => {
  const [menu] = UseMenu();

  const popularMenu = menu?.filter((item) => item?.category === "popular");

  return (
    <section className="my-20">
      <div>
        <SectionTitle title={"---Check it out---"} heading={"FROM OUR MENU"} />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 px-10 md:px-0 mt-10">
        {popularMenu?.map((item) => (
          <CardItem key={item?._id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default PopularMenu;
