import img from "../../../assets/menu/salad-bg.jpg";
import img2 from "../../../assets/menu/pizza-bg.jpg";
import img3 from "../../../assets/menu/soup-bg.jpg";

const PopularCard = () => {
  return (
    <div className=" flex justify-center ">
      <div className="flex gap-2 lg:gap-4">
        <div>
          <div className="h-40 w-24 md:h-[300px] md:w-60 lg:h-96 lg:w-80 bg-gray-300">
            <img className="" src={img} alt="" />
            <div className="text-center mt-2">
              <h1 className="text-[12px] md:text-[24px] lg:text-[30px] font-bold">
                Salad
              </h1>
              <p className="text-[8px] md:text-[15px] lg:text-[20px]">
                Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
              </p>
              <button className="text-[10px] md:text-[15px] lg:text-[20px] px-1 py-1 md:px-2 md:py-2 md:mt-3 rounded-sm shadow-2xl bg-slate-100 font-bold text-yellow-300">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div className="h-40 w-24 md:h-[300px] md:w-60 lg:h-96 lg:w-80 bg-gray-300">
              <img className="" src={img2} alt="" />
              <div className="text-center mt-2">
                <h1 className="text-[12px] md:text-[24px] lg:text-[30px] font-bold">
                  Piza
                </h1>
                <p className="text-[8px] md:text-[15px] lg:text-[20px]">
                  Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
                </p>
                <button className="text-[10px] md:text-[15px] lg:text-[20px] px-1 py-1 md:px-2 md:py-2 md:mt-3 rounded-sm shadow-2xl bg-slate-100 font-bold text-yellow-300">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div className="h-40 w-24 md:h-[300px] md:w-60 lg:h-96 lg:w-80 bg-gray-300">
              <img className="" src={img3} alt="" />
              <div className="text-center mt-2">
                <h1 className="text-[12px] md:text-[24px] lg:text-[30px] font-bold">
                  Sup
                </h1>
                <p className="text-[8px] md:text-[15px] lg:text-[20px]">
                  Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
                </p>
                <button className="text-[10px] md:text-[15px] lg:text-[20px] px-1 py-1 md:px-2 md:py-2 md:mt-3 rounded-sm shadow-2xl bg-slate-100 font-bold text-yellow-300">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularCard;
