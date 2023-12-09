import { useLoaderData } from "react-router-dom";
import AboutUs from "../../components/AboutUs/AboutUs";
import HomeCarousal from "../../components/Banner/Carousal";
import BrandsCard from "../../components/BrandsCard/BrandsCard";
import TopRatedProducts from "../../components/TopRatedProducts/TopRatedProducts";

const Home = () => {
  const brandData = useLoaderData();

  // console.log("brandData ", brandData);
  return (
    <>
      <HomeCarousal brand={"common"}></HomeCarousal>
      <div className="mt-12">
        <h3 className="text-4xl text-center font-extrabold">Brands</h3>
        <div className="flex flex-wrap gap-5 justify-center items-center my-10">
          {brandData.map((brand) => (
            <BrandsCard key={brand._id} brand={brand}></BrandsCard>
          ))}
        </div>
      </div>

      <TopRatedProducts className="py-10"></TopRatedProducts>
      <AboutUs className="py-10" />
    </>
  );
};

export default Home;
