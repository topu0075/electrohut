import { Link } from "react-router-dom";

const ErrorPg = () => {
  return (
    <>
      <div className='bg-red-100 flex flex-col justify-center items-center h-screen gap-8'>
        <h1 className='text-7xl font-extrabold'>404</h1>
        <p className='text-3xl font-bold'>OPPS!!! PAGE NOT FOUND</p>
        <p className='tex-xl font-semibold'>
          Sorry, the page you are looking for does not exit.
        </p>
        <Link className='btn btn-warning' to='/'>
          Go Back to Home
        </Link>
      </div>
    </>
  );
};

export default ErrorPg;
