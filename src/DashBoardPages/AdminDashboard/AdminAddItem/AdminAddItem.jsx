import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import DashSectionHeading from "../../Shared/DashSectionHeading";
import { useForm } from "react-hook-form";

// const image_hosting_key = import.meta.env.VITE_ImageHosting_Key;
// //console.log(image_hosting_key);
// const image_hosting_api =`https://api.imgbb.com/1/upload?key=${image_hosting_key}`


const AdminAddItem = () => {
  const { register, handleSubmit,formState: { errors } } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const onSubmit = async (data) => {
    //console.log(data);

    // image upload image bb
    // const imageData = {image: data.image[0]}
  
    // const res = await axiosPublic.post(image_hosting_api,imageData ,{
    //   headers:{
    //     'Content-Type':'multipart/form-data'
    //   }
    // });
   // ////console.log(res.data);
    const menuItem = {
      name: data.name,
      category: data.category,
      price: parseFloat(data.price),
      image: data.image,
      recipe: data.recipe 
    };
    const menuRes = await axiosSecure.post('/menu',menuItem);
    //console.log(menuRes.data);
    if(menuRes.data.insertedId){
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `${data.name}Menu add successfully`,
        showConfirmButton: false,
        timer: 1500
      });
    }
    
  };
  return (
    <div>
      <div>
        <DashSectionHeading
          subHeading="Add an items"
          heading="Whats new?"
        ></DashSectionHeading>
      </div>
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
                defaultValue="" // Set the defaultValue prop here
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
                className="input input-bordered md:w-[215px] lg:w-[300px] "
                required
              />
            </div>
          <input type="submit" className="btn btn-accent mt-2" />
         
        </form>
      </div>
    </div>
  );
};

export default AdminAddItem;
