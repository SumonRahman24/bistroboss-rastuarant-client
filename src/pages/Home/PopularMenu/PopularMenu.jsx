import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import UseMenu from "../../../hooks/UseMenu";
import MenuCategory from "../../../components/MenuCategory/MenuCategory";

const PopularMenu = () => {
  const [menu] = UseMenu();

  const popularMenu = menu?.filter((item) => item?.category === "popular");

  return (
    <section className="my-20">
      <div>
        <SectionTitle title={"---Check it out---"} heading={"FROM OUR MENU"} />
      </div>
      <MenuCategory items={popularMenu} />
    </section>
  );
};

export default PopularMenu;
