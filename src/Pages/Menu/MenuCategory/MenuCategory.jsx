import MenuItemCard from "../../MenuItemCard/MenuItemCard";

const MenuCategory = ({items}) => {
    return (
        <div className="mt-5 px-4 lg:mt-12 md:mt-12 md:px-10 lg:px-12 mx-auto">
             <div className="grid md:grid-cols-2 gap-4 ">
        {items?.map(item => (
          <MenuItemCard
            key={item._id}
            item={item}
          />
        ))}
      </div>
        </div>
    );
};

export default MenuCategory;