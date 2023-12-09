import { useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const Root = () => {
  const [modeToggler, setModeToggle] = useState({
    bg: "bg-white",
    text: "text-black",
  });
  return (
    <div 

      className={`flex flex-col justify-around ${modeToggler.bg} ${modeToggler.text}`}
    >
      <Header setModeToggle={setModeToggle}></Header>
      <div className='container mx-auto'>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
