import darkLogo from "../Assets/logo.png";
import { GlobalButton } from "./GlobalButton";

export const Footer = () => {
  return (
    <div className="my-10">
      <center>
        <img className="h-[30px]" src={darkLogo} alt="" />
      </center>
      <center className="my-5 text-gray-500">
        © 2023 Headwind Labs Inc. All rights reserved.
      </center>

      <center className="mt-10 flex justify-center">
        <GlobalButton text="Privacy policy" choice={"sec"} />
        <GlobalButton text="Changelog" className="border-l" choice={"sec"} />
      </center>
    </div>
  );
};
