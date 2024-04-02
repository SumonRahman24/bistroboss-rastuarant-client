import { Helmet } from "react-helmet-async";
import menuImg from "../../../assets/menu/banner3.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import UseMenu from "../../../hooks/UseMenu";
import MenuCategory from "../../../components/MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = UseMenu();

  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  const offered = menu.filter((item) => item.category === "offered");

  return (
    <div>
      <Helmet>
        <title>Bistro Boss || Menu</title>
      </Helmet>
      <div>
        <MenuCategory
          coverImg={menuImg}
          title={"our menu"}
          desc={"Would you like to try a dish?"}
          items={offered}
          heading={"---Don't miss---"}
          subHeading={"TODAY'S OFFER"}
        />
        <MenuCategory
          coverImg={dessertImg}
          title={"desserts"}
          desc={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
          items={dessert}
        />
        <MenuCategory
          coverImg={pizzaImg}
          title={"pizza"}
          desc={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
          items={pizza}
        />
        <MenuCategory
          coverImg={saladImg}
          title={"salads"}
          desc={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
          items={salad}
        />
        <MenuCategory
          coverImg={saladImg}
          title={"soups"}
          desc={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
          items={soup}
        />
      </div>
    </div>
  );
};

export default Menu;
