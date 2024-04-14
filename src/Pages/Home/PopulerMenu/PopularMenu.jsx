import MenuItemCard from "../../MenuItemCard/MenuItemCard";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {

  const [menu]=useMenu();
 
  const popular = menu.filter(item => item.category === 'popular');
  

  return (
    <div className="flex justify-center">
      <div className="grid md:grid-cols-2 gap-4 ">
        {popular?.map(item => (
          <MenuItemCard
            key={item._id}
            item={item}
          />
        ))}
      </div>
    </div>
  );
};

export default PopularMenu;
