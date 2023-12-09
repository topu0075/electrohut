import { PropTypes } from "prop-types";
import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import UserIcon from "/user.png";

const Header = ({ setModeToggle }) => {
  const { user, logOut } = useContext(AuthContext);
  const [theme, setTheme] = useState(false);
  const [themeName, setThemeName] = useState(false);
  useEffect(() => {
    if (theme) {
      setThemeName("Dark Mode");
      setModeToggle({
        bg: "bg-black",
        text: "text-white",
      });
    } else {
      setThemeName("Light Mode");
      setModeToggle({
        bg: "bg-white",
        text: "text-black",
      });
    }
  }, [theme, setModeToggle]);
  const handleLogOut = async () => {
    try {
      await logOut();
    } catch (error) {
      // console.log(error);
    }
  };
  return (
    <>
      <div className='flex justify-end flex-row-reverse lg:flex-row lg:justify-around my-5 md:my-10'>
        <div className='flex items-center mx-auto lg:mx-0'>
          <img
            src={"https://i.ibb.co/HN9L4VL/logo.png"}
            className='w-16 rounded-full'
          />
          <Link to='/' className='btn btn-ghost normal-case text-2xl'>
            ElectroHub
          </Link>
        </div>
        <div className='flex justify-center'>
          <div className='flex-none hidden lg:flex'>
            <ul className='items-center menu menu-horizontal px-1'>
              <li>
                <NavLink to='/'>Homepage</NavLink>
              </li>
              <li>
                <NavLink to='/products'>Add Products</NavLink>
              </li>
              <li>
                <NavLink to='/mycart'>My Cart</NavLink>
              </li>
              {!user ? (
                <li>
                  <NavLink to='/login'>Login</NavLink>
                </li>
              ) : (
                <div className='flex items-center'>
                  <li>
                    <img
                      src={user?.photoURL ? user.photoURL : UserIcon}
                      className=' rounded-full w-20'
                    />
                  </li>
                  <li>{user?.displayName ? user.displayName : user.email}</li>
                  <li>
                    <button onClick={handleLogOut}>Logout</button>
                  </li>
                </div>
              )}
              <li>
                <div className='form-control'>
                  <label className='label cursor-pointer'>
                    <span className='mr-2'>{themeName}</span>
                    <input
                      type='checkbox'
                      className='toggle'
                      onChange={() => setTheme((prev) => !prev)}
                    />
                  </label>
                </div>
              </li>
            </ul>
          </div>
          <div className='w-3/12 lg:hidden z-10'>
            <div className='dropdown'>
              <label tabIndex='0' className='btn btn-ghost btn-circle'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M4 6h16M4 12h16M4 18h7'
                  />
                </svg>
              </label>
              <ul
                tabIndex='0'
                className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
              >
                {user && (
                  <div className='flex-col '>
                    <li>
                      <img
                        src={user?.photoURL ? user.photoURL : UserIcon}
                        className=' rounded-full w-20'
                      />
                    </li>
                    <li>
                      {user?.displayName ? user.displayName : user?.email}
                    </li>
                  </div>
                )}
                <li>
                  <NavLink to='/'>Homepage</NavLink>
                </li>
                <li>
                  <NavLink to='/products'>Add Products</NavLink>
                </li>
                <li>
                  <NavLink to='/mycart'>My Cart</NavLink>
                </li>
                {!user ? (
                  <li>
                    <NavLink to='/login'>Login</NavLink>
                  </li>
                ) : (
                  <li>
                    <button onClick={handleLogOut}>Logout</button>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Header.propTypes = {
  setModeToggle: PropTypes.func,
};
export default Header;
