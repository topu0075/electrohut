import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";

const BrandsCard = ({ brand }) => {
  return (
    <div className='card w-96 bg-base-100 shadow-xl'>
      <figure className='px-10 pt-10'>
        <img src={brand.image_url} alt='' className='rounded-xl h-20' />
      </figure>
      <div className='card-body items-center text-center'>
        <div className='card-actions'>
          <Link className='btn btn-outline' to={`/brand/${brand.name}`}>
            {brand.name}
          </Link>
        </div>
      </div>
    </div>
  );
};

BrandsCard.propTypes = {
  brand: PropTypes.object,
};
export default BrandsCard;
