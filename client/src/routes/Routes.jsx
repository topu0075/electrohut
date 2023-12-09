import { createBrowserRouter } from "react-router-dom";
import ProductsbyBand from "../components/BrandsCard/ProductbyBrand/ProductsbyBand";
import Cart from "../components/Cart/Cart";
import ProductsDetails from "../components/ProductDetails/ProductsDetails";
import UpdateProducts from "../components/UpdateProducts/UpdateProducts";
import Root from "../layouts/RootLayout";
import AddProducts from "../pages/AddProducts/AddProducts";
import ErrorPg from "../pages/ErrorPg";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,

    errorElement: <ErrorPg />,
    children: [
      {
        path: "/",
        loader: async () =>
          await fetch("https://server-assignment-10-delta.vercel.app/brands"),
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/products",
        element: (
          <PrivateRoutes>
            <AddProducts></AddProducts>
          </PrivateRoutes>
        ),
      },
      {
        path: "/brand/:brandname",
        loader: async ({ params }) =>
          await fetch(
            `https://server-assignment-10-delta.vercel.app/products/brand/${params.brandname}`
          ),
        element: <ProductsbyBand />,
      },
      {
        path: "/updateproducts/:id",
        loader: async ({ params }) =>
          await fetch(
            `https://server-assignment-10-delta.vercel.app/products/${params.id}`
          ),
        element: (
          <PrivateRoutes>
            <UpdateProducts />
          </PrivateRoutes>
        ),
      },
      {
        path: "/productsdetails/:id",
        loader: async ({ params }) =>
          await fetch(
            `https://server-assignment-10-delta.vercel.app/products/${params.id}`
          ),
        element: (
          <PrivateRoutes>
            <ProductsDetails />
          </PrivateRoutes>
        ),
      },

      {
        path: "/mycart",
        loader: async () =>
          await fetch("https://server-assignment-10-delta.vercel.app/cart"),
        element: (
          <PrivateRoutes>
            <Cart></Cart>
          </PrivateRoutes>
        ),
      },
    ],
  },
]);

export default router;
