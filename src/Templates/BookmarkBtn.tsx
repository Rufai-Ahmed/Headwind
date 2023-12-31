import { FC } from "react";
import { FaBookmark } from "react-icons/fa";
import { iBook } from "../utils/interfaces";

export const BookmarkBtn: FC<iBook> = ({ num }) => {
  return (
    <div>
      {" "}
      <div className="w-full rounded-md bg-white py-2 gap-3 pl-3 border flex items-center ">
        <div>
          <FaBookmark className="text-[grey]" />
        </div>
        <div>Bookmark</div>
        <div className="h-full px-3 flex justify-center items-center border-l">
          {num}
        </div>
      </div>
    </div>
  );
};
