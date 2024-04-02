import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const UpdateItem = () => {
  const { name, recipe, price, category, _id } = useLoaderData();

  const { register, handleSubmit } = useForm();
  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();

  const onSubmit = async (data) => {
    console.log(data);
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log(res.data);
    if (res.data.success) {
      const menuItem = {
        name: data.name,
        image: res.data.data.display_url,
        price: parseFloat(data.price),
        recipe: data.recipe,
        category: data.category,
      };

      const resMenu = await axiosSecure.patch(`/menu/${_id}`, menuItem);
      console.log(resMenu.data);
      if (resMenu.data.modifiedCount > 0) {
        // reset
        // reset();

        // alert
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: `${data.name} is update successfully`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
  };

  return (
    <div>
      <div>
        <SectionTitle title={"---What's new?---"} heading={"ADD AN ITEM"} />

        <div>
          <div className="mx-auto max-w-[992px] px-4 py-8 sm:px-6 lg:px-8 mb-10">
            <div className=" gap-x-16 gap-y-8 lg:grid-cols-5">
              <div className="rounded-lg bg-[#F3F3F3] p-8 shadow-lg lg:col-span-3 lg:p-12">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div className="space-y-1">
                    <span className="label-text text-xl">Recipe name*</span>
                    <label className="sr-only" htmlFor="name">
                      Name
                    </label>
                    <input
                      defaultValue={name}
                      {...register("name", { required: true })}
                      className="w-full rounded-lg border-gray-200 p-3 text-sm"
                      placeholder="Recipe name"
                      type="text"
                      id="name"
                    />
                  </div>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="flex flex-col space-y-1">
                      <span className="label-text text-xl">Category</span>
                      <select
                        {...register("category", { required: true })}
                        className="select select-bordered w-full max-w-xs"
                      >
                        <option disabled defaultValue={category}>
                          Select a category
                        </option>
                        <option value="salad">Salad</option>
                        <option value="pizza">Pizza</option>
                        <option value="soups">Soups</option>
                        <option value="desserts">Desserts</option>
                        <option value="drinks">Drinks</option>
                      </select>
                    </div>

                    <div className=" space-y-1">
                      <span className="label-text text-xl">Price</span>
                      <label className="sr-only" htmlFor="phone">
                        Phone
                      </label>
                      <input
                        defaultValue={price}
                        {...register("price", { required: true })}
                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                        placeholder="Price"
                        type="number"
                        id="phone"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3"></div>
                  <div className="space-y-1">
                    <span className="label-text text-xl">Recipe Details*</span>
                    <label className="sr-only" htmlFor="message">
                      Message
                    </label>

                    <textarea
                      defaultValue={recipe}
                      {...register("recipe", { required: true })}
                      className="w-full rounded-lg border-gray-200 p-3 text-sm"
                      placeholder="Recipe Details"
                      rows="8"
                      id="message"
                    ></textarea>
                  </div>

                  <div>
                    <input
                      {...register("image", { required: true })}
                      type="file"
                      className="bg-[#E8E8E8] w-full max-w-xs"
                    />
                  </div>
                  <div className="mt-4 ">
                    <button
                      type="submit"
                      className="w-full rounded bg-black px-5 py-3 font-medium text-white sm:w-auto flex gap-1 items-center gradient-bg"
                    >
                      Add Item{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M12 8.0001C12 3.58201 9.98338 0 7.5 0C5.01568 0 3 3.58201 3 8.0001C3 9.92279 4.21201 11.5518 5.90818 12.1953L5.4999 21.9999C5.4999 23.1045 6.39539 24 7.5 24C8.60461 24 9.5001 23.1045 9.5001 21.9999L9.09182 12.1962C10.7892 11.5518 12 9.92279 12 8.0001Z"
                          fill="white"
                        />
                        <path
                          d="M21 7.2501L20.7501 0H19.5L19.2501 7.2501H18.2499L18 0H16.5L16.2501 7.2501H15.2499L15 0H13.7499L13.5 7.2501C13.5 8.77529 14.4141 10.0818 15.7227 10.668L15.2499 21.9999C15.2499 23.1045 16.1454 24 17.25 24C18.3546 24 19.2501 23.1045 19.2501 21.9999L18.7773 10.668C20.0859 10.0818 21 8.77529 21 7.2501Z"
                          fill="white"
                        />
                      </svg>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateItem;
