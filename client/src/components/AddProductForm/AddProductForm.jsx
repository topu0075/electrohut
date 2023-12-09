import { useState } from "react";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

const AddProductForm = () => {
  // eslint-disable-next-line no-unused-vars
  const [category, setCategory] = useState("Select-Category");
  // eslint-disable-next-line no-unused-vars
  const [brand, setBrand] = useState("Select Brand");
  const [loading, setLoading] = useState(false);

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    const formData = new FormData(form);
    const productInfo = Object.fromEntries(formData.entries());
    // console.log(productInfo);
    // console.log(typeof productInfo);

    try {
      const response = await fetch(
        "https://server-assignment-10-delta.vercel.app/products",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(productInfo),
        }
      );
      const data = await response.json();
      // console.log(data);
      form.reset();
      Swal.fire({
        title: "Success!",
        text: "Added Successfully",
        icon: "success",
        confirmButtonText: "Close",
      });
    } catch (error) {
      // console.log(error);
      Swal.fire({
        title: "Error!",
        text: "Server Error!!! Product did not add, try again after some time",
        icon: "error",
        confirmButtonText: "Try Again",
      });
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center bg-red-50 w-full md:w-10/12 lg:w-2/3 py-5 mx-auto rounded-lg mt-10 mb-20">
        <h3 className="text-4xl text-center font-bold mt-10">Add Products</h3>
        <div className="md:w-3/5 flex-col lg:flex-row my-10">
          <div className="shadow-2xl rounded-lg bg-base-100">
            {loading ? (
              <div className="min-h-16 mx-auto py-5 flex justify-center items-center">
                <span className="mx-auto loading loading-bars loading-lg"></span>
              </div>
            ) : (
              <form className="card-body" onSubmit={handleOnSubmit}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Brand Names</span>
                  </label>
                  <select
                    defaultValue={"Select Brand"}
                    className="select select-bordered w-full "
                    name="brand"
                    onChange={(e) => setBrand(e.target.value)}
                  >
                    <option disabled>Select Brand</option>
                    <option value="apple">Apple</option>
                    <option value="samsung">Samsung</option>
                    <option value="realme">Realme</option>
                    <option value="vivo">Vivo</option>
                    <option value="oneplus">Oneplus</option>
                    <option value="xiaomi">Xiaomi</option>
                  </select>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Categories</span>
                  </label>
                  <select
                    defaultValue={"Select Category"}
                    className="select select-bordered w-full "
                    name="category"
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    <option disabled>Select Category</option>
                    <option value="phone">Phone</option>
                    <option value="tablet">Tablet</option>
                    <option value="laptop">Laptop</option>
                    <option value="headphone">Headphones</option>
                    <option value='smartwatch'>Smartwatch</option>
                  </select>
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Price</span>
                  </label>
                  <input
                    type="number"
                    placeholder="Price"
                    name="price"
                    className="input input-bordered"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Short Description</span>
                  </label>
                  <textarea
                    type="text"
                    placeholder="Short Description"
                    name="description"
                    className="textarea textarea-bordered"
                    rows="5"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Rating</span>
                  </label>
                  <input
                    type="number"
                    name="rating"
                    placeholder="Rating out of 5"
                    className="input input-bordered"
                    step="0.01"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Image URL</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Image URL"
                    className="input input-bordered"
                    name="imageUrl"
                    required
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary text-white">
                    Add Products
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProductForm;
