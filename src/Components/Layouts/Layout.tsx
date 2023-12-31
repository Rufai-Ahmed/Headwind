import { Outlet } from "react-router-dom";
import { Header } from "../Common/Header";
import bg from "../../Assets/bg.jpg";
import { Footer } from "../../Templates/Footer";

export const Layout = () => {
  return (
    <div
      className="w-full flex justify-center bg-top bg-no-repeat bg-contain min-h-screen "
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className=" w-[95%] xl:w-[95%] 2xl:w-[80%] lg:w-[95%]  ">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};
