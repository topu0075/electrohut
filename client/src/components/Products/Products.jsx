import PropTypes from "prop-types";

const Products = ({ product, buttonsGroup }) => {
  // console.log("Product jsx", product);
  // console.log(buttonsGroup());
  return (
    <div className='card bg-base-100 shadow-xl'>
      <figure>
        <img
          className='w-48 h-64 p-4'
          src={product.imageUrl}
          alt={product.name}
        />
      </figure>
      <div className='px-8 card-body  my-2'>
        <h2 className='card-title'>{product.name}</h2>
        <p className='border-b-2'>
          <span className='text-lg text-gray-500 mr-2'>Brand: </span>
          {product.brand}
        </p>
        <p className='border-b-2'>
          <span className='text-lg text-gray-500 mr-2'>Category: </span>{" "}
          {product.category}
        </p>
        <p className='border-b-2'>
          <span className='text-lg text-gray-500 mr-2'>Rating:</span>{" "}
          {product.rating}
        </p>
        <p>
          <span className='text-lg text-gray-500 mr-2'>Price: </span>
          {product.price} tk
        </p>
        {buttonsGroup(product._id)}
      </div>
    </div>
  );
};

Products.propTypes = {
  product: PropTypes.object,
  buttonsGroup: PropTypes.func,
};

export default Products;
