import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Products from "../Products/Products";

const TopRatedProducts = () => {
  const [allProducts, setAllProducts] = useState("");
  useEffect(() => {
    fetch("https://server-assignment-10-delta.vercel.app/products")
      .then((res) => res.json())
      .then((data) => {
        const sortedData = data.sort((p1, p2) => p2.rating - p1.rating);
        // console.log("sorted data:-",sortedData.slice(0,4));
        setAllProducts(sortedData.slice(0, 4));
      });
  }, []);
 
  const detailsButton = (id) => {
    return (
      <div className='justify-center mt-4'>
        <Link to={`/productsdetails/${id}`} className='btn btn-primary w-full'>
          Details
        </Link>
      </div>
    );
  };
  return (
    <div className='my-20 px-4'>
      <h3 className='text-4xl font-extrabold text-center my-10 '>
        Top Rated Products
      </h3>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-10'>
        {allProducts &&
          allProducts.map((product) => (
            <Products
              key={product._id}
              product={product}
              buttonsGroup={detailsButton}
            ></Products>
          ))}
      </div>
    </div>
  );
};

export default TopRatedProducts;
