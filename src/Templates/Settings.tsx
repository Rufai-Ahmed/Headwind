import { Toggle } from "./Toggle";

export const Settings = () => {
  return (
    <div>
      {" "}
      <div className="w-[480px] text-[14px] p-5 bg-white rounded-md border shadow-md ">
        <strong className="pb-5">Account</strong>
        <div className="pb-5 border-b">
          Manage how information is displayed on your account
        </div>

        <div className="py-3 border-b  items-center grid grid-cols-3 w-full ">
          <div className="col-span-1 ">Language</div>
          <div className="col-span-1 ">English</div>
          <div className="text-blue-700 col-span-1 justify-center grid ">
            Update
          </div>
        </div>

        <div className="py-3 border-b  items-center grid grid-cols-3 w-full ">
          <div className="col-span-1 ">Date format</div>
          <div className="col-span-1 ">DD-MM-YYYY</div>
          <div className="text-blue-700 col-span-1 justify-center flex ">
            Update <span className="text-[grey] mx-2 ">|</span> Remove
          </div>
        </div>

        <div className="py-3 border-b  items-center grid grid-cols-2 w-full ">
          <div className="col-span-1 ">Automatic timezone</div>
          <div className="col-span-1 grid justify-end ">
            <Toggle onBg="purple" size={30} offBg="grey" />
          </div>
        </div>

        <div className="pt-3   items-center grid grid-cols-2 w-full ">
          <div className="col-span-1 ">Auto-update applicant data</div>
          <div className="col-span-1 flex justify-start flex-row-reverse ">
            <Toggle onBg="purple" size={30} offBg="grey" />
          </div>
        </div>
      </div>
    </div>
  );
};
