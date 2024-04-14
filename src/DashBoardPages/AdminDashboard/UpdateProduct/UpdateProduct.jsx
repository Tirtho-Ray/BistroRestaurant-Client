import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";


const UpdateProduct = () => {
    const { register, handleSubmit,formState: { errors } } = useForm();
   const item = useLoaderData();
   const{name,recipe,category,image,price,_id}=item;
    const axiosPublic = useAxiosPublic();
   const axiosSecure = useAxiosSecure();
   const onSubmit = async (data) => {
     console.log(data);
     const menuItem = {
       name: data.name,
       category: data.category,
       price: parseFloat(data.price),
       image: data.image,
       recipe: data.recipe 
     };
     const menuRes = await axiosSecure.patch(`/menu/${item._id}`,menuItem);
     console.log(menuRes.data);
     if(menuRes.data.modifiedCount>0){
       Swal.fire({
         position: "top-end",
         icon: "success",
         title: `${data.name}update successfully`,
         showConfirmButton: false,
         timer: 1500
       });
     }
     
   };
    return (
        <div>
           <div>

           </div>
           <div>
           <div className="md:w-[480px] lg:w-[650px] bg-white p-4 mx-auto">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Recipe Name</span>
            </label>
            <input
              {...register("name", {
                required: true,
                minLength: 4,
                maxLength: 20,
              })}
              type="name"
              placeholder="Recipe Name"
              defaultValue={item.name}
              className="input input-bordered"
              required
            />
          </div>
          {/*  */}
          <div className="md:flex md:gap-4  ">
            <div>
              <label className="label">
                <span className="label-text">Category*</span>
              </label>
              <select
                {...register("category", { required: true })}
                className="select select-primary lg:w-[300px] w-[210px] md:w-[215px] max-w-xs"
                
                
                defaultValue={item.category}
              >
                <option value="" disabled>
                  category
                </option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="drinks">Drinks</option>
                <option value="dessert">Dessert</option>
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price*</span>
              </label>
              <input
                {...register("price", { required: true })}
                type="name"
                placeholder="Price"
                defaultValue={item.price}
                className="input input-bordered md:w-[215px] lg:w-[300px] "
                required
              />
            </div>
          </div>
          {/*  */}
          <div className="form-control ">
            <label className="label">
              <span className="label-text">Recipe details</span>
            </label>
            <textarea
              {...register("recipe", { required: true, minLength: 6,
                maxLength: 25, })}
              name="recipe"
              className="textarea textarea-bordered"
              placeholder="Recipe Details"
              defaultValue={item.recipe}
            >
              
            </textarea>
            {errors.details && (
                        <span className="mt-1 text-red-400 ">
                          Need 5 cha minimum and max cha 30
                        </span>
                      )}
          </div>
          {/* <div className="mt-2 md:mt-3">
            <input
              {...register("image", {
                required: true})}
              type="file"
              name="image"
              className="file-input file-input-bordered w-full max-w-xs"
            />
          </div> */}
          <div className="form-control">
              <label className="label">
                <span className="label-text">Image Url</span>
              </label>
              <input
                {...register("image", { required: true })}
                type="name"
                placeholder="image url"
                defaultValue={item.image}
                className="input input-bordered md:w-[215px] lg:w-[300px] "
                required
              />
            </div>
          <input type="submit" className="btn btn-accent mt-2" />
         
        </form>
      </div>
           </div>
        </div>
    );
};

export default UpdateProduct;