import { useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import Carousal from "../../Banner/Carousal";
import ProductNotFound from "../../ProductNotFound/ProductNotFound";
import Products from "../../Products/Products";

const ProductsbyBand = () => {
  const params = useParams();
  // console.log(params.brandname);
  const data = useLoaderData();
  // eslint-disable-next-line no-unused-vars
  const [product, setProduct] = useState(data);
  // eslint-disable-next-line no-unused-vars

  const buttonsGroup = (id) => {
    return (
      <div className='flex justify-center mt-4 gap-4'>
        <Link to={`/productsdetails/${id}`} className='btn btn-primary w-1/3'>
          Details
        </Link>
        <Link to={`/updateproducts/${id}`} className='btn btn-primary w-1/3'>
          Update
        </Link>
      </div>
    );
  };
  return (
    <>
      {data.length > 0 ? (
        <div>
          <Carousal brand={params.brandname}></Carousal>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-10 px-5'>
            {product.map((product) => (
              <Products
                key={product._id}
                product={product}
                buttonsGroup={buttonsGroup}
              ></Products>
            ))}
          </div>
        </div>
      ) : (
        <ProductNotFound />
      )}
    </>
  );
};

export default ProductsbyBand;
