export const Table = () => {
  return (
    <div>
      {" "}
      <div className="w-[230px] bg-white h-[40px] items-center text-[15px] grid grid-cols-3 rounded-md border  ">
        <div className="flex justify-center border-r h-full items-center">
          Years
        </div>
        <div className="flex justify-center border-r h-full items-center">
          Months
        </div>
        <div className="flex justify-center border-r h-full items-center">
          Days
        </div>
      </div>
    </div>
  );
};
