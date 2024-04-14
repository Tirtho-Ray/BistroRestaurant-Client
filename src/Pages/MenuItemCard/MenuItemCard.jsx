import "./item.css";

const MenuItemCard = ({ item }) => {
  const { image, recipe, price, name } = item;
  return (
    <div className="">
      <div className="flex gap-2 ">
        <div className="">
          <img style={{borderRadius: '0 200px 200px 200px'}} className="h-12 w-12 md:w-16 md:h-16 lg:w-20 lg:h-20" src={image} alt="" />
        </div>
        <div>
          <div className="flex  justify-between ">
            <div>
              <h1 className="text-[13px] md:text-[15px] lg:text-[20px] mt-0 font-bold">{name}</h1>
            </div>
            <div className="text-[10px] md:text-[14px] font-bold ">${price}</div>
          </div>
          <div>
            <p className="text-[10px] w-full ">{recipe}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItemCard;
