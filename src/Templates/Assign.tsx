import { useState } from "react";

export const Assign = () => {
  const [state, setState] = useState(2);
  return (
    <div>
      <div className="w-[450px] border p-4 ">
        <strong>Assigned to</strong>
        <div className="w-full mt-3 rounded-md border flex justify-between items-center pl-3 py-2 text-[15px] ">
          <div>Tom Cook</div>
        </div>

        <div className="rounded-md mt-4 border">
          {[
            { name: "Wade Cooper" },
            { name: "Devon Webb" },
            { name: "Tom Cook" },
            { name: "Ariene Mccoy" },
          ].map((el, i) => (
            <div
              onMouseEnter={() => {
                setState(i);
              }}
              onMouseLeave={() => {
                setState(i);
              }}
              className={
                state === i
                  ? "bg-purple-500 py-2 pl-3 text-[14px] text-white"
                  : "py-2 pl-3 text-[13px]"
              }
            >
              {el.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
