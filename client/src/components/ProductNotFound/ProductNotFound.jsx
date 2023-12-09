import { Link } from "react-router-dom";

const ProductNotFound = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <img src={"https://i.ibb.co/Hd3r36P/no-product-found.png"} />
      <div className='flex gap-8 mb-20'>
        <Link to='/' className='btn btn-info'>
          Go Back To Homepage
        </Link>
        <Link to='/products' className='btn btn-info'>
          Add a Product
        </Link>
      </div>
    </div>
  );
};

export default ProductNotFound;
