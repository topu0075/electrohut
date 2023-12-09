import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import CartProducts from "../CartProduct/CartProducts";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";


const Cart = () => {
  const cartDataLoader = useLoaderData();
  const [cartData, setCartData] = useState(cartDataLoader);
  const [loading, setLoading] = useState(false)
  const handleDelete = async (id) => {
    setLoading(true)
    // console.log("id to delete:- ", id);
    try {
      const res = await fetch(
        `https://server-assignment-10-delta.vercel.app/cart/${id}`,
        {
          method: "DELETE",
        }
      );
      const data = await res.json();
      // console.log(data);
      const deletedItems = cartData.filter((item) => item._id !== id);
      setCartData(deletedItems);
      // console.log("my del item: ", deletedItems);
      Swal.fire({
        title: "Success!",
        text: "Removed Successfully",
        icon: "success",
        confirmButtonText: "Close",
      });
    } catch (error) {
      // console.log(error);
      Swal.fire({
        title: "Error!",
        text: "Server Error!!! , try again after some time",
        icon: "error",
        confirmButtonText: "Try Again",
      });
    }finally{
      setLoading(false)
    }
  };
  return (
    <div className='w-3/4 mx-auto mb-10 md:mb-20'>
      <h3 className='text-4xl text-center font-extrabold my-10'>My Cart</h3>
      <div className='border-2 p-10'>
        {loading ? <span className="mx-auto loading loading-bars loading-lg"></span> : cartData &&
          cartData.map((product, idx) => (
            <div key={idx}>
              <CartProducts
                product={product}
                handleDelete={handleDelete}
              ></CartProducts>
              <hr className='my-8' />
            </div>
          )) }
        
      </div>
    </div>
  );
};

export default Cart;
