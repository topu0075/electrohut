import PropTypes from "prop-types";

const CartProducts = ({ product, handleDelete }) => {
  // console.log(product);
  return (
    <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
      <div>
        <img className='w-20 h-20' src={product.imageUrl} alt='' />
      </div>
      <div>
        <p>{product.name}</p>
      </div>
      <div>
        <p>{product.price}</p>
      </div>
      <div>
        <button
          className='btn btn-error'
          onClick={() => handleDelete(product._id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

CartProducts.propTypes = {
  product: PropTypes.object,
  handleDelete: PropTypes.func,
};

export default CartProducts;
