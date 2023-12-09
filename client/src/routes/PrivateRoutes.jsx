import { PropTypes } from "prop-types";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  // console.log(user);
  if (user) {
    return children;
  }
  if (loading) {
    return (
      <div className='w-1/2 mx-auto'>
        <span className='loading loading-spinner loading-lg'></span>
      </div>
    );
  }
  return <Navigate state={location.pathname} to='/login' />;
};

PrivateRoutes.propTypes = {
  children: PropTypes.node,
};
export default PrivateRoutes;
