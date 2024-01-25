import MenuCard from "../../../components/MenuCard/MenuCard";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import UseMenu from "../../../hooks/UseMenu";

const ChefRecommend = () => {
  const [menu] = UseMenu();

  const offeredMenu = menu?.filter((item) => item?.category === "offered");

  return (
    <section>
      <SectionTitle title={"---Should Try---"} heading={"CHEF RECOMMENDS"} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
        {offeredMenu?.slice(0, 3).map((item) => (
          <MenuCard key={item?._id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default ChefRecommend;
