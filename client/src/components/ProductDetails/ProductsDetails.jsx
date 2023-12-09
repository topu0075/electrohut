import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

const ProductsDetails = () => {
  const product = useLoaderData();
  // console.log(typeof product);
  const [loading, setLoading] = useState(false)

  const handleAddToCart = async () => {
    setLoading(true)
    delete product[0]._id
    try {
      const response = await fetch(
        "https://server-assignment-10-delta.vercel.app/cart",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(product[0]),
        }
      );
      const data = await response.json();
      // console.log(data);
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
    }finally{
      setLoading(false)
    }
  };

  return (
    <div className='lg:w-10/12 mx-auto px-4'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:border-b-8 md:my-10'>
        <div className='flex flex-wrap mb-5 p-5'>
          <img className='lg:w-1/2 mx-auto' src={product[0].imageUrl} alt='' />
        </div>
        <div className='px-8 lg:w-3/4 card-body my-2 h-3/4'>
          <h2 className='card-title'>{product[0].name}</h2>
          <p className='border-b-2'>
            <span className='text-lg text-gray-500 mr-2'>Brand: </span>
            {product[0].brand}
          </p>
          <p className='border-b-2'>
            <span className='text-lg text-gray-500 mr-2'>Category: </span>{" "}
            {product[0].category}
          </p>
          <p className='border-b-2'>
            <span className='text-lg text-gray-500 mr-2'>Rating:</span>{" "}
            {product[0].rating}
          </p>
          <p className='mb-4'>
            <span className='text-lg text-gray-500 mr-2'>Price: </span>
            {product[0].price} tk
          </p>
          <button
            className='w-full bg-primary p-4 text-white rounded-lg'
            onClick={handleAddToCart}
          >
            {loading ? <span className="mx-auto loading loading-bars loading-lg"></span>:  "Add to Cart"}
           
          </button>
        </div>
      </div>
      <hr className='w-3/4 mx-auto lg:hidden' />
      <div className='my-10 mx-auto border-2 p-5 w-10/12 lg:w-full'>
        <h3 className='text-2xl font-semibold my-3'>Description: </h3>
        <p>{product[0].description}</p>
      </div>
    </div>
  );
};

export default ProductsDetails;
